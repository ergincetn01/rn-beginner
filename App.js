import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalAdd from "./components/GoalAdd";
import CaseStudy from "./components/CaseStudy";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [isVisible, setVisible] = useState(false);

  const [goals, setGoals] = useState([]);

  function reset() {
    setNewGoal("");
  }

  function openModal() {
    setVisible(true);
  }

  function closeModal() {
    setVisible(false);
  }

  function goalAddHandler(enteredText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
    reset();
    closeModal();
  }

  function deleteGoal(id) {
    setGoals((goals) => {
      return goals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
   
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title="Add new goal" color="#f31282" onPress={openModal} />
      <GoalAdd
        addGoal={goalAddHandler}
        isVisible={isVisible}
        onCancel={closeModal}
      />
      <Text style={styles.listTitle}>List of goals</Text>
      <View>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteGoal={deleteGoal}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View> 
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  listTitle: {
    marginTop: 15,
    padding: 5,
    color: "white",
    textAlign: "center",
  },
});
