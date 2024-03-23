import { View, Text, Image, StyleSheet, Platform } from "react-native";

const getTypeDetail = (type) => {
  switch (type.toLowerCase()) {
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🍀" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
      break;
  }
};

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  const { borderColor, emoji } = getTypeDetail(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameHpView}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.hpText}>❤️HP {hp}</Text>
      </View>

      <Image style={styles.image} source={image} />

      <View style={[styles.type, { borderColor }]}>
        <Text style={styles.typeText}>
          {emoji} {type}
        </Text>
      </View>

      <View style={styles.moves}>
        <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
      </View>

      <View>
        <Text style={styles.movesText}>
          Weaknesses: {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 16,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.4,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameHpView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  nameText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hpText: {
    fontSize: 22,
    fontWeight: 500,
  },
  type: {
    borderWidth: 4,
    borderRadius: "10%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 25,
  },
  typeText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  movesText: {
    fontSize: 21,
    fontWeight: "bold",
  },
  moves: {
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 25,
  },
});
