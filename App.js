import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [goalEntered, setGoalEntered] = useState('')
  const [goals, setGoals] = useState([])

  let goalInputHandler = (enteredTxt) => {
    setGoalEntered(enteredTxt)
  }

  let addGoalHandler = () => {
    setGoals((goals) => {
      return [...goals, goalEntered]
    })
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Course Goal!' onChangeText={goalInputHandler}></TextInput>
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
      <ScrollView >
        {goals.map((goal, index) => (
          <View key={index} style={styles.goalItem}>
            <Text style={styles.goalTxt}>{goal}</Text>
          </View>
        ))}
      </ScrollView>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    width: '70%',
    borderColor: 'black',
    padding: 5,
    marginRight: 5,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'black',
  },
  goalTxt: {
    color: 'white',
  }
});

// * Make sure you put the correct styling on the elements you want to target sense REACT NATIVE does not have styling inheritance/ Cascading

