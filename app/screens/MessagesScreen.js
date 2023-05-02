import React from "react"
import { FlatList, StyleSheet, View } from "react-native"
// console.log(Constants)
import Screen from "../components/Screen"
import ListItem from "../components/ListItem"
import ListItemSeperator from "../components/ListItemSeparator"

//* this is a temporary sunstitution for an api call
const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
]

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({})

export default MessagesScreen
