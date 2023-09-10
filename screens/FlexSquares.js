import { StyleSheet, Text, View } from "react-native";

export default function FlexSquares() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.red}>
        <Text>1</Text>
      </View>
      <View style={styles.blue}>
        <Text>2</Text>
      </View>
      <View style={styles.green}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  inpCont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cccccc",
    width: "80%",
  },
  red: {
    backgroundColor: "red",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  green: {
    backgroundColor: "green",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  blue: {
    backgroundColor: "blue",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
