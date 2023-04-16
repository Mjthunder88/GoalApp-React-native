import { StyleSheet, Text, View  } from "react-native"
let GoalItem = ({itemData}) => {
    return (
        <View style={styles.goalItem}>
        <Text style={styles.goalTxt}>{itemData}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "black",
      },
      goalTxt: {
        color: "white",
      },
})

export default GoalItem





