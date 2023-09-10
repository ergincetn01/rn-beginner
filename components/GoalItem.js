import { StyleSheet, Text, View } from "react-native";

function GoalItem({text}) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    padding: 6,
    backgroundColor: "#5e0acc",
    margin: 8,
    borderRadius: 6,
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
