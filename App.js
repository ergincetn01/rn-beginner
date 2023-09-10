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
      <Text style={styles.listTitle}>List of goals</Text>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        {/* make the appereance => index inside a circle with padding in the same row the title of goal */}
        {goals.map((goal) => (
          <View style={styles.goalItem} key={goal}>
            <View style={styles.indexContainer}>
              <Text style={styles.indexText}> {goals.indexOf(goal) + 1}</Text>
            </View>
            <Text style={styles.goalText}>
              {goals.indexOf(goal) + 1} - {goal}
            </Text>
          </View>
        ))}

        <View style={styles.goalsContainer}></View>
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
  listTitle: {
    margin: 5,
    padding: 5,
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
    flexDirection: "column",
  },
  goalItem: {
    padding: 6,
    backgroundColor: "#5e0acc",
    margin: 8,
    borderRadius: 6,
  },
  indexContainer: {
    margin: "auto",
    justifyContent: "center",
    flexDirection: "column",
    width: 40,
    height: 40,
    backgroundColor: "yellow",
  },
  indexText: {
    color: "black",
    fontWeight: "bold",
  },
  goalText: {
    color: "white",
  },
});
