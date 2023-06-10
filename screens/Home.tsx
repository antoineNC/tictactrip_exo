import { StyleSheet, View } from "react-native";
import { SearchBar } from "../components/searchBar";

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: "#f1f2f6" },
});
