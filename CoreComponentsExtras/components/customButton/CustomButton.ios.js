import { Pressable, Text, StyleSheet } from "react-native";

const CustomButton = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      <Text style={styles.btnText}> ❤️{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "purple",
    marginHorizontal: 15,
    paddingVertical: 13,
    paddingHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    shadowColor: "black",
    shadowRadius: "10%",
    shadowOffset: 1,
    shadowOpacity: 0.6,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 900,
  },
});

export default CustomButton;
