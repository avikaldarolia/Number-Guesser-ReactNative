import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native"
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState("")

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber("")
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number', 'Number has to be a number between 1 and 99.',
            [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        onPickNumber(enteredNumber)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} onChangeText={numberInputHandler} value={enteredNumber} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: "#3b021f",
        borderRadius: 8,
        // only for android
        elevation: 10,
        // only for ios
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    }
})