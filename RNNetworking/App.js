import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const data = await response.json();
      setPostList(data);
      setIsLoading(false);
      setError("");
    } catch (err) {
      console.error("Failed to fetch post ", err);
      setError(`Failed to fetch post`);
      setIsLoading(false);
    }
  };

  //pull to refresh implementation
  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };

  //
  const addPost = async () => {
    setIsPosting(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            body: body,
          }),
        }
      );

      const NewPost = await response.json();
      setPostList([NewPost, ...postList]);
      setTitle("");
      setBody("");
      setIsPosting(false);
      setError("");
    } catch (err) {
      console.error("Failed to add new post ", err);
      setError(`Failed to add new post`);
      setIsPosting(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadContainer}>
        <ActivityIndicator size={"large"} color={"#0000ff"} />
        <Text style={{ marginTop: 15 }}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={{ color: "red", fontSize: 16 }}>{error}</Text>
        </View>
      ) : (
        <>
          {/* Input for post */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Post Title"
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              style={[styles.input, styles.multilineText]}
              placeholder="Enter Post body"
              value={body}
              onChangeText={setBody}
              multiline
            />
            <Button
              title={isPosting ? "Posting..." : "Add Post"}
              onPress={addPost}
              disabled={isPosting}
            />
          </View>

          {/*  */}
          <View style={styles.listContainer}>
            <FlatList
              data={postList}
              renderItem={({ item }) => {
                return (
                  <View style={styles.postCard}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.bodyText}>{item.body}</Text>
                  </View>
                );
              }}
              ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
              ListEmptyComponent={
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  No Post available
                </Text>
              }
              ListHeaderComponent={
                <Text
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingBottom: 12,
                  }}
                >
                  POSTS
                </Text>
              }
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
  },
  loadContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  postCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bodyText: {
    fontSize: 15,
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 5,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    fontSize: 15,
    marginBottom: 15,
  },
  multilineText: {
    minHeight: 50,
    textAlignVertical: "top",
  },
  errorContainer: {
    backgroundColor: "#FFC0CB",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    margin: 16,
    alignItems: "center",
  },
});
