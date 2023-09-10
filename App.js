import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState([]);

  function reset() {
    setNewGoal("");
  }

  function goalAddHandler() {
    console.log(newGoal);
    
    setGoals((currentGoals) => [...currentGoals, newGoal]);
    reset();
  }

  function inputHandler(enteredText) {
    setNewGoal(enteredText);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inpCont}>
        <TextInput
          style={styles.textInput}
          placeholder="your course goal:"
          onChangeText={inputHandler}
          value={newGoal}
        />
        <Button title="Add goal" onPress={goalAddHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals</Text>

        {goals.map((goal) => (
          <Text key={goal}>
            {goals.indexOf(goal) + 1} {goal}{" "}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5,
  },
});
