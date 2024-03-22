import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Alert,
} from "react-native";
import CustomButton from "./components/customButton/CustomButton";
export default function App() {
  // SafeAreaView only works for IOS devices

  const onPress = () => {
    console.log("Clicked on Button ");
    Alert.alert("Platform specific code!", " Does it work?");
  };
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome!</Text>
        <View style={styles.btnContainer}>
          <CustomButton title={"Press me "} onPress={onPress} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 10 : 0, //A platform specific code
  },
  text: {
    //for large number of styling
    ...Platform.select({
      ios: {
        color: "blue",
        fontSize: 20,
      },
      android: {
        color: "gray",
        fontSize: 25,
      },
    }),

    fontWeight: "bold",
  },
  btnContainer: {
    marginTop: 20,
    width: "100%",
  },
});
