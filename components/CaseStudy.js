import { FlatList, StyleSheet, Text, View } from "react-native";

function CaseStudy() {


  return (
    <View style={styles.main}>
        <View>
            <image />
        </View>
      <FlatList/>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 6,
    margin: 8,
    borderRadius: 6,
  },
});

export default CaseStudy;
