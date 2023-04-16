import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StyleSheet, View, FlatList, Button } from "react-native";

export default function App() {
  const [isVisable, setIsVisable] = useState(false)
  const [goals, setGoals] = useState([]);

  let startAddGoalHanlder = () => {
    setIsVisable(true)
  }

  let endAddGoalHandler = () => {
    setIsVisable(false)
  }

  let addGoalHandler = (goalEntered) => {
    setGoals((goals) => {
      return [
        ...goals,
        {
          text: goalEntered,
          id: Math.random().toString(),
        },
      ];
    });
    endAddGoalHandler()
  };

  let deleteGoalHandler = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id)
    }
  )};

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color='black' onPress={startAddGoalHanlder} />
      {isVisable && <GoalInput onAddGoal={addGoalHandler} visable={isVisable} onEndGoal={endAddGoalHandler} />}
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id
              
          }}
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
  goalsContainer: {
    flex: 5,
  },
});

// * Make sure you put the correct styling on the elements you want to target sense REACT NATIVE does not have styling inheritance/ Cascading

// * Scrollview will render items even if they're not displayed on the screen so be careful! If you plan on using a list of items to be displayed that will be longer dont' use Scrollview.
// ? <Flatlist> Is the solution
