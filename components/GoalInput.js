import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [goalEntered, setGoalEntered] = useState("");

  let goalInputHandler = (enteredTxt) => {
    setGoalEntered(enteredTxt);
  };

  let addGoalHandler = () => {
    props.onAddGoal(goalEntered);
    setGoalEntered("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course Goal!"
        onChangeText={goalInputHandler}
        value={goalEntered}
      ></TextInput>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
      <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
        <View style={styles.button}>
      <Button title="Cancel" onPress={props.onEndGoal} />
        </View>
      </View>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 5,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    borderColor: "black",
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    width: '25%',
    marginHorizontal: 8,
  }
});

export default GoalInput;
