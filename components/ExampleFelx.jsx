import { View, Text, StyleSheet } from "react-native"
import Btn from "./Btn"

const ExampleFelx = () => {
  return (
    <>
      <View style={styles.container}>

        <View style={styles.header}>
            <Text style={styles.headerText}>Header</Text>
        </View>

        <View style={styles.content}>
            <Text>Content</Text>
            <Btn>To counter</Btn>
        </View>

      </View>
    </>
  )
}

export default ExampleFelx

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 20
    },
    header: {
        flex: 0.2,
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold"
    },
    content: {
        flex: 0.8,
        backgroundColor: "#fff",
        marginVertical: 10,
        paddingHorizontal: 10
    }
})