import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
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
        <Image
          source={require("../assets/goal-image.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
          value={goalEntered}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#637078" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onEndGoal} color="#212227" />
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
    padding: 16,
    backgroundColor: "#AAB9CF",
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    borderColor: "#637074",
    backgroundColor: "#AAB9CF",
    color: "#637074",
    padding: 8,
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    width: "25%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    padding: 5,
  },
});

export default GoalInput;
