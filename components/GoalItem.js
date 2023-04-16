import { StyleSheet, Text, View, Pressable } from "react-native";
let GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable onPress={props.onDeleteItem.bind(this, props.id )} style={({pressed}) => pressed && styles.pressedItem}>
      <Text style={styles.goalTxt}>{props.itemData}</Text>
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "black",
  },
  goalTxt: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5
  }
});

export default GoalItem;
