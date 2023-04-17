import { StatusBar } from "expo-status-bar"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  Dimensions,
  SafeAreaView,
  Button,
  useWindowDimensions,
} from "react-native"
import { useDeviceOrientation } from "@react-native-community/hooks"

export default function App() {
  const orientation = useDeviceOrientation()
  console.log(useWindowDimensions())
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: orientation === "landscape" ? "100%" : "30%",
        }}
      ></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})
