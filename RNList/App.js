import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
  useWindowDimensions,
  SectionList,
} from "react-native";

import PokemonList from "./data.json";
import GroupedPokemonList from "./grouped-data.json";

export default function App() {
  // const windowHeight = useWindowDimensions().height;
  // const newWindow = windowHeight - 85;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollview}>
        <SectionList
          sections={GroupedPokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => {
            return <Text style={styles.sectionHeaderText}>{section.type}</Text>;
          }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
          SectionSeparatorComponent={() => <View style={{ height: 16 }}></View>}
        />
        {/* <FlatList
          data={PokemonList}
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
          horizontal={true}
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
          ListHeaderComponent={
            <Text style={styles.headerText}>Pokemon List</Text>
          }
          ListFooterComponent={
            <Text style={styles.footerText}>End of List</Text>
          }
        /> */}
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
  headerText: {
    fontSize: 30,
    textAlign: "center",
    margin: 12,
  },
  footerText: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
  },
  sectionHeaderText: {
    backgroundColor: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
