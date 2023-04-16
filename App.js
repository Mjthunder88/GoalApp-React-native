import { useState } from "react";
import GoalItem from "./components/GoalItem";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [goalEntered, setGoalEntered] = useState("");
  const [goals, setGoals] = useState([]);

  let goalInputHandler = (enteredTxt) => {
    setGoalEntered(enteredTxt);
  };

  let addGoalHandler = () => {
    setGoals((goals) => {
      return [
        ...goals,
        {
          text: goalEntered,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
        ></TextInput>
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem itemData={itemData.item.text} />
            );
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    width: "70%",
    borderColor: "black",
    padding: 5,
    marginRight: 5,
  },
  goalsContainer: {
    flex: 5,
  },
});

// * Make sure you put the correct styling on the elements you want to target sense REACT NATIVE does not have styling inheritance/ Cascading

// * Scrollview will render items even if they're not displayed on the screen so be careful! If you plan on using a list of items to be displayed that will be longer dont' use Scrollview.
// ? <Flatlist> Is the solution
