import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalAdd({ addGoal, isVisible, onCancel }) {
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
    <Modal animationType="slide" visible={isVisible}>
      <View style={styles.inpCont}>
        <Image style={styles.image} source={require("../assets/images/eduloglogo.jpg")} />
        <TextInput
          style={styles.textInput}
          placeholder="your course goal:"
          onChangeText={goalInputHandler}
          value={newGoal}
        />
        <View style={styles.buttonCont}>
          <View style={styles.button}>
            <Button title="Add" onPress={newGoal!=="" ? addGoalHandler : null}/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inpCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#210644"
  },
image: {
  width: 100, height: 100, margin: 20
},
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 16,
    backgroundColor: "white", color:"#120438", borderRadius: 10
  },
  buttonCont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginTop: 16,
    marginHorizontal: 8,
    width: 110,
  },
});

export default GoalAdd;
