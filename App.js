import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalAdd from "./components/GoalAdd";
import CaseStudy from "./components/CaseStudy";

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState([]);

  function reset() {
    setNewGoal("");
  }

  function goalAddHandler(enteredText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
    reset();
  }

  function deleteGoal(id) {
    setGoals(goals=> {
      return goals.filter((goal)=> goal.id !==id)
    })
  }
  return (
    // <View style={styles.appContainer}>
    //   <CaseStudy />
    // </View>
    <View style={styles.appContainer}>
      <GoalAdd
        addGoal={goalAddHandler}
      />
      <Text style={styles.listTitle}>List of goals</Text>
      <View>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteGoal={deleteGoal} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
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
