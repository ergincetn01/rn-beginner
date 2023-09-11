import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({text, onDeleteGoal}) {
  return (
    <Pressable onPress={onDeleteGoal}>
       <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
    </Pressable>
   
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
