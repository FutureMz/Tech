import { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar, SafeAreaView, ImageBackground, FlatList, } from "react-native";
export function TodoList() {
    const [text, setText] = useState('');
    const [list, setList] = useState([{ text: "Hi", time: 897586767 }]);

    function pushText() {
        const obj = { text, time: new Date().getTime() };
        setList([...list, obj]);
        console.log(pushText);
    }

    return (
        < ImageBackground source={{ uri: 'https://images.pexels.com/photos/5710208/pexels-photo-5710208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={{ height: "100%" }}>
            <SafeAreaView>
                <Text style={styles.header}>TODO LIST DISPLAY</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Item Name'
                    onChangeText={(inp) => setText(inp)} />
                <TouchableOpacity style={styles.button} onPress={pushText}>
                    <Text style={{ color: 'black', fontSize: 20 }}>ADD TO LIST</Text>
                </TouchableOpacity>

                {/* {list.map((item) => <Text>{item.text}</Text>)} */}

                <FlatList
                    style={{ marginTop: 20 }}
                    data={list}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.flatView}>
                                <Text>{item.text}</Text>
                                <View style={styles.row}>
                                    <Text>{new Date(item.time).toDateString()}</Text>

                                </View>
                            </View>
                        )
                    }}
                    key={(item) => item.time.toDateString()} />

            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        marginTop: StatusBar.currentHeight,
    },
    header: {
        fontSize: 43,
        padding: 30,
        textAlign: 'center',
        color: 'blue',
    },
    input: {
        borderRadius: 30,
        borderWidth: 3,
        padding: 10,
        fontSize: 20,
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 40,
        padding: 17,
        alignItems: 'center',
        marginTop: 30
    },
    flatView: {
        borderColor: 'blue',
        padding: 20,
        borderWidth: 8,
        borderRadius: 30,
        marginTop: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

})