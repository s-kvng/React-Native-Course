import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
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
          style={[styles.inputText, styles.multilineText]}
          placeholder="Message"
          multiline
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
});
