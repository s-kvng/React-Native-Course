import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from "react-native";

let windowHeight;
let windowWidth;
export default function App() {
  // const [dimensions, setDimensions] = useState({
  //   window: Dimensions.get("window"),
  // });

  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener("change", ({ window }) => {
  //     setDimensions({ window });
  //   });
  //   return subscription?.remove;
  // });

  // const { window } = dimensions;
  // const windowHeight = window.height;
  // const windowWidth = window.width;

  windowHeight = useWindowDimensions().height;
  windowWidth = useWindowDimensions().width;

  console.log(windowHeight, " ", windowWidth);
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            height: windowHeight > 500 ? "50%" : 300,
            width: windowWidth > 500 ? "70%" : "60%",
          },
        ]}
      >
        <Text style={{ fontSize: windowWidth > 500 ? 40 : 24 }}>Welcome!</Text>
      </View>
    </View>
  );
}

// const windowHeight = Dimensions.get("window").height;
// const windowWidth = Dimensions.get("window").width;

// console.log(windowHeight, " ", windowWidth);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    // height: windowHeight > 500 ? "60%" : 300,
    // width: windowWidth > 500 ? "70%" : "60%",
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  // text: {
  //   fontSize: 24,
  // },
});
