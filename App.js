import { StyleSheet, Text, View } from "react-native"
import WelcomeScreen from "./app/screens/WelcomeScreen"
import ViewImageScreen from "./app/screens/ViewImageScreen"

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>
        I love React Native! This is my first react native app, heres some more
        text dude
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontStyle: "italic",
    fontWeight: "600",
    fontSize: 30,
    color: "tomato",
    textTransform: "capitalize",
    textDecorationLine: "underline",
    textAlign: "center",
    lineHeight: 30,
  },
})
