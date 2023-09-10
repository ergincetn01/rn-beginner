import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalAdd from "./components/GoalAdd";

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState([]);

  function reset() {
    setNewGoal("");
  }

  function goalAddHandler(enteredText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, key: Math.random().toString() },
    ]);
    reset();
  }

  function inputHandler(enteredText) {
    setNewGoal(enteredText);
  }
  return (
    <View style={styles.appContainer}>
      <GoalAdd
        addGoal={goalAddHandler}
        // goalTitle={newGoal}
        // handleInput={inputHandler}
      />
      <Text style={styles.listTitle}>List of goals</Text>
      <View>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.key;
          }}
        />
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
  listTitle: {
    margin: 5,
    padding: 5,
  },
  goalsContainer: {
    flex: 5,
    flexDirection: "column",
  },
});
