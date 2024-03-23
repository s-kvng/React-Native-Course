import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
  useWindowDimensions,
} from "react-native";

import PokemonList from "./data.json";

export default function App() {
  const windowHeight = useWindowDimensions().height;
  const newWindow = windowHeight - 85;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollview}>
        <FlatList
          data={[]}
          renderItem={({ item }) => {
            console.log(item.id);
            return (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardText}>{item.name}</Text>
                <Text style={styles.cardText}>{item.type}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          // horizontal={true}
          ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
          ListEmptyComponent={
            <View
              style={{
                height: newWindow,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "red",
              }}
            >
              <Text>No Item found</Text>
            </View>
          }
        />
      </View>
      {/* <ScrollView style={styles.scrollview}>
        {PokemonList.map((pokemon) => (
          <View key={pokemon.id} style={styles.card}>
            <Text style={styles.cardText}>{pokemon.name}</Text>
            <Text style={styles.cardText}>{pokemon.type}</Text>
          </View>
        ))}
      </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  scrollview: {
    paddingHorizontal: 16,
  },
  card: {
    // height: 80,
    backgroundColor: "white",
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
  },
  cardText: {
    fontSize: 20,
  },
});
