import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Switch,
} from "react-native";
import { Octicons, Entypo, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
const { width } = Dimensions.get("screen");

export const SearchBar = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.mainContent}>
          <View
            style={[
              styles.selectsContainer,
              width < 767 && { justifyContent: "space-between" },
            ]}
          >
            <View style={styles.wayContainer}>
              <Text>ONE WAY</Text>
            </View>
            <View style={styles.passengerContainer}>
              <Text>ONE PASSENGER</Text>
            </View>
          </View>
          <View
            style={
              width < 767
                ? styles.fieldsContainer
                : [
                    styles.fieldsContainer,
                    { flexDirection: "row", columnGap: 20 },
                  ]
            }
          >
            <View style={styles.placesContainer}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <FontAwesome
                  name="circle-o"
                  size={20}
                  color={"#a1a9c3"}
                  style={{ marginHorizontal: 8 }}
                />
                <TextInput
                  placeholder="From: City, Station or Airport"
                  placeholderTextColor={"#b3bacf"}
                  style={{ flex: 1, fontSize: 16, minWidth: 0 }}
                />
              </View>

              <LinearGradient
                colors={["transparent", "#f1f2f6", "#f1f2f6"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={{
                  height: "100%",
                  width: 50,
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderRadius: 8,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  height: "100%",
                  paddingRight: 8,
                  justifyContent: "center",
                  backgroundColor: "#f1f2f6",
                  borderRadius: 8,
                }}
              >
                <Octicons name="arrow-switch" size={20} color={"#5e90cc"} />
              </View>
            </View>
            <View style={styles.placesContainer}>
              <Entypo
                name="location-pin"
                size={20}
                color={"#a1a9c3"}
                style={{ marginHorizontal: 8 }}
              />
              <TextInput
                placeholder="To: City, Station or Airport"
                placeholderTextColor={"#b3bacf"}
                style={{ flex: 1, fontSize: 16, minWidth: 0 }}
              />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  height: "100%",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <LinearGradient
                  colors={["transparent", "#f1f2f6", "#f1f2f6"]}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={{ height: 24, width: 40 }}
                />
              </View>
            </View>
            <View style={styles.dateContainer}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Entypo
                  name="calendar"
                  size={20}
                  color={"#a1a9c3"}
                  style={{ marginHorizontal: 5 }}
                />
                <TextInput
                  placeholder="Date d'aujourd'hui"
                  placeholderTextColor={"#b3bacf"}
                  style={{ fontSize: 16, minWidth: 0 }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  borderLeftWidth: 0.5,
                  borderLeftColor: "#b3bacf",
                  paddingLeft: 8,
                }}
              >
                <TextInput
                  placeholder="Add return"
                  placeholderTextColor={"#b3bacf"}
                  style={{ fontSize: 16 }}
                />
              </View>
            </View>
            <View style={styles.searchBtnContainer}>
              <TouchableOpacity>
                <Text style={{ color: "white" }}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.accomodationBox}>
          <Switch
            trackColor={{ false: "#f1f2f6", true: "#5e90cc" }}
            thumbColor={isEnabled ? "white" : "white"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text>Find my accomodation</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 198,
    marginBottom: 24,
    marginHorizontal: "auto",
    paddingHorizontal: 16,
    minWidth: 280,
    maxWidth: 1136,
    width: "100%",
    zIndex: 10,
  },
  formContainer: {
    backgroundColor: "white",
    paddingBottom: 16,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  mainContent: { padding: 16, width: "100%" },

  selectsContainer: { flexDirection: "row" },
  wayContainer: {},
  passengerContainer: {},

  fieldsContainer: {
    display: "flex",
    flex: 1,
  },
  placesContainer: {
    flex: 3,
    flexDirection: "row",
    marginVertical: 4,
    padding: 5,
    paddingVertical: 15,
    backgroundColor: "#f1f2f6",
    borderRadius: 8,
    alignItems: "center",
  },
  dateContainer: {
    flex: 4,
    flexDirection: "row",
    marginVertical: 4,
    padding: 5,
    paddingVertical: 15,
    backgroundColor: "#f1f2f6",
    borderRadius: 8,
  },
  searchBtnContainer: {
    flexGrow: 2,
    marginVertical: 4,
    padding: 5,
    paddingVertical: 15,
    backgroundColor: "#fa6b6b",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  accomodationBox: {
    paddingHorizontal: 16,
    width: "100%",
    flexDirection: "row",
    columnGap: 20,
  },
});
