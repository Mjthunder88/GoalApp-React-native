import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StyleSheet, View, FlatList, Button, Image, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isVisable, setIsVisable] = useState(false);
  const [goals, setGoals] = useState([]);

  let startAddGoalHanlder = () => {
    setIsVisable(true);
  };

  let endAddGoalHandler = () => {
    setIsVisable(false);
  };

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
    endAddGoalHandler();
  };

  let deleteGoalHandler = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <View style={styles.backgroundBtn}>
          <Button
            title="Add New Goal"
            color="black"
            onPress={startAddGoalHanlder}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("./assets/freshh-2.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteTxt}>Fall In Love With The Process</Text>
        </View>

        {isVisable && (
          <GoalInput
            onAddGoal={addGoalHandler}
            visable={isVisable}
            onEndGoal={endAddGoalHandler}
          />
        )}
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
              return item.id;
            }}
          />
        </View>
      </View>
    </>
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
  backgroundBtn: {
    backgroundColor: "#637074",
    marginTop: 20,
    borderRadius: 10,
  },
  image: {
    width: "85%",
    height: "60%",
    borderRadius: 10,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  quoteContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  quoteTxt: {
    color: "black",
    fontSize: 24,
  },
});

// * Make sure you put the correct styling on the elements you want to target sense REACT NATIVE does not have styling inheritance/ Cascading

// * Scrollview will render items even if they're not displayed on the screen so be careful! If you plan on using a list of items to be displayed that will be longer dont' use Scrollview.
// ? <Flatlist> Is the solution
