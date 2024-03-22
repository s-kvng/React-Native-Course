import { Pressable, Text, StyleSheet } from "react-native";

const CustomButton = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      <Text style={styles.btnText}>🌩️{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "lightblue",
    padding: 10,
  },
  btnText: {
    fontSize: 15,
    fontWeight: 600,
  },
});

export default CustomButton;
