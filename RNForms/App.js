import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#000" : "#fff" },
      ]}
    >
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Enter Name"
        onChangeText={setName}
        cursorColor={"black"}
        secureTextEntry
        keyboardType="number-pad"
        // autoCorrect={false}
        // autoCapitalize="none"
      />
      <Text style={styles.inputText}>I am called {name}</Text>
      <View>
        <TextInput
          style={[styles.input, styles.multilineText]}
          placeholder="Message"
          multiline
        />
      </View>
      <View style={styles.switchView}>
        <Text>Dark Mode </Text>
        <Switch
          value={darkMode}
          onValueChange={() => setDarkMode((prev) => !prev)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    margin: 10,
    padding: 15,
    borderWidth: 1,
    fontSize: 20,
  },
  inputText: {
    fontSize: 25,
    padding: 20,
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  switchView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    padding: 10,
  },
});
