import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function GoalAdd({ addGoal }) {
  const [newGoal, setNewGoal] = useState("");

  function goalInputHandler(enteredText) {
    setNewGoal(enteredText);
  }

  function reset() {
    setNewGoal("");
  }

  function addGoalHandler() {
    addGoal(newGoal);
    reset();
  }

  return (
    <View style={styles.inpCont}>
      <TextInput
        style={styles.textInput}
        placeholder="your course goal:"
        onChangeText={goalInputHandler}
        value={newGoal}
      />
      <Button title="Add goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inpCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 24,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalAdd;
