import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ text, onDeleteGoal, id }) {
  return (
    <Pressable
      android_ripple={{ color: "#210644" }}
      onPress={onDeleteGoal.bind(this, id)}
      style={({pressed})=> pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressedItem: {
    opacity: 0.5
  },
  goalItem: {
    backgroundColor: "mediumblue",
    margin: 8,
    borderRadius: 6
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});

export default GoalItem;
