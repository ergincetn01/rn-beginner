import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ text, onDeleteGoal, id }) {
  return (
    <Pressable onPress={onDeleteGoal.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    padding: 8, margin:8
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
