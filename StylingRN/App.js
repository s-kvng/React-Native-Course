import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Styles Inheritance <Text style={styles.boldText}> in Bold</Text>
        </Text>
      </View>
      <Text style={styles.title}>StyleSheet API</Text>
      <View style={[styles.box, styles.lightblueBg, styles.IOSboxShadow]}>
        {/* the last style in the array takes precedence */}
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.lightgreenBg, styles.box, styles.andriodShadowBox]}>
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
    width: "70%",
    height: 250,
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

  darkMode: {
    backgroundColor: "black",
  },

  darkModeText: {
    color: "white",
  },

  boldText: {
    fontWeight: "800",
  },

  //works only for IOS devices
  IOSboxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  // works for android devices
  andriodShadowBox: {
    elevation: 10,
  },
  title: {
    fontSize: 50,
  },
});
