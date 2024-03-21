import { StyleSheet, View } from "react-native";

import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#6b0803", alignSelf: "auto" }}>Box 5</Box>
      {/* when no align self is defined it takes it default value from the container , which has a default value of stretch  */}
      <Box style={{ backgroundColor: "#b95f43" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#1c4c65" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "baseline",
    flexWrap: "wrap",
    // rowGap: 20,
    // columnGap: 30,
    gap: 20,
    // alignContent: "space-around",
    height: 300,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});
