import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function App() {
  // const [name, setName] = useState("");
  // const [darkMode, setDarkMode] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const validationForm = () => {
    let errors = {};

    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";

    setError(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    // <SafeAreaView
    //   style={[
    //     styles.container,
    //     { backgroundColor: darkMode ? "#000" : "#fff" },
    //   ]}
    // >
    //   <TextInput
    //     style={styles.input}
    //     value={name}
    //     placeholder="Enter Name"
    //     onChangeText={setName}
    //     cursorColor={"black"}
    //     secureTextEntry
    //     keyboardType="number-pad"
    //     // autoCorrect={false}
    //     // autoCapitalize="none"
    //   />
    //   <Text style={styles.inputText}>I am called {name}</Text>
    //   <View>
    //     <TextInput
    //       style={[styles.input, styles.multilineText]}
    //       placeholder="Message"
    //       multiline
    //     />
    //   </View>
    //   <View style={styles.switchView}>
    //     <Text>Dark Mode </Text>
    //     <Switch
    //       value={darkMode}
    //       onValueChange={() => setDarkMode((prev) => !prev)}
    //     />
    //   </View>
    // </SafeAreaView>

    <SafeAreaView style={styles.safeViewContainer}>
      <KeyboardAvoidingView
        behavior="padding"
        // keyboardVerticalOffset={Platform.OS === "ios" ? 140 : 0}
        style={styles.container}
      >
        <View style={styles.formCard}>
          {/* <Image
            source={require("./assets/adaptive-icon.png")}
            style={styles.image}
          /> */}
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              margin: 10,
            }}
          >
            SkillSwap
          </Text>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Username"
            value={username}
            onChangeText={setUsername}
          />
          {/* {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null} */}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Enter your Password"
            value={password}
            onChangeText={setPassword}
          />
          {/* {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null} */}
          <Button title="Login" onPress={() => {}} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeViewContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    fontSize: 15,
    marginBottom: 15,
  },
  formCard: {
    width: "100%",

    borderRadius: 5,
    backgroundColor: "white",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 400,
    alignSelf: "center",
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: StatusBar.currentHeight,
//   },
//   input: {
//     margin: 10,
//     padding: 15,
//     borderWidth: 1,
//     fontSize: 20,
//   },
//   inputText: {
//     fontSize: 25,
//     padding: 20,
//   },
//   multilineText: {
//     minHeight: 100,
//     textAlignVertical: "top",
//   },
//   switchView: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: 20,
//     padding: 10,
//   },
// });
