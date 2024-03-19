import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheet API</Text>
      <View style={[styles.box, styles.lightblueBg]}>
        {/* the last style in the array takes precedence */}
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.lightgreenBg, styles.box]}>
        <Text>Lightgreen Box</Text>
      </View>
    </View>
  );
}

// Multiple styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  box: {
    width: "50%",
    height: "25%",
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 10,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },

  title: {
    fontSize: 50,
  },
});
