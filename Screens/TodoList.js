import { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar, SafeAreaView, ImageBackground, FlatList, ScrollView, } from "react-native";
export function TodoList() {
    const [text, setText] = useState('');
    const [list, setList] = useState([{ text, time: 8975887556767 }]);
    const [checkout, setCheckout] = useState('')

    function pushText() {
        const obj = { text, time: new Date().getTime(), setCheckout: "CHECK OUT"};
        setList([...list, obj]);
    }

    function deleteItem(id){
        const clear =list.filter(item=>item.time !== id)
        setList(clear);
    }

    function checking(id){
            const clear = list.map(item =>item.time === id ? {...item, setCheckout: "CHECKED" } : item)
            setList(clear)
    }

    return (
        < ImageBackground source={{ uri: 'https://images.pexels.com/photos/5710208/pexels-photo-5710208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={{ height: "100%" }}>
            
            <SafeAreaView>
            <ScrollView>
                <Text style={styles.header}>TODO LIST DISPLAY</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Item Name'
                    borderColor= '#ff00006b'
                    onChangeText={(inp) => setText(inp)} />
                <TouchableOpacity style={styles.button} onPress={pushText}>
                    <Text style={{ color: 'gold', fontSize: 20 }}>ADD TO LIST</Text>
                </TouchableOpacity>

                
                <FlatList
                    style={{ marginTop: 20, margin:5 }}
                    data={list}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.flatView}>
                                <Text style={styles.flatText}>{item.text}</Text>
                                <View style={styles.row}>
                                    <Text style={styles.flatText}>{new Date(item.time).toDateString()}</Text>
                                
                                <View style={styles.flatV}>
                                <TouchableOpacity 
                                style={styles.flatbutton}
                                onPress={()=> deleteItem(item.time)}>
                                <Text style={{color:'gold'}}>DELETE</Text></TouchableOpacity>
                                
                                <TouchableOpacity 
                                style={styles.flatbutton}
                                onPress={()=> checking(item.time)}>
                                <Text style={{color:'gold'}}>{item.setCheckout}</Text></TouchableOpacity>
                                </View>
                                </View>
                            </View>
                            
                        )
                    }}
                    key={(item) => item.time.toDateString()} />
                    
            </ScrollView>
            </SafeAreaView>
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    header: {
        fontSize: 43,
        padding: 30,
        textAlign: 'center',
        color: 'red',
    },
    input: {
        borderRadius: 30,
        borderWidth: 3,
        padding: 10,
        fontSize: 20,
    },
    button: {
        backgroundColor: '#ff00009a',
        borderRadius: 40,
        padding: 17,
        alignItems: 'center',
        marginTop: 30
    },

    flatbutton: {
        backgroundColor: '#ff0000b9',
        borderRadius: 40,
        padding: 10, 
        marginRight:10
        
    },
    flatView: {
        borderColor: '#ff00006b',
        padding: 10,
        borderWidth: 3,
        borderRadius: 30,
        marginTop: 5
    },
    row: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    flatText:{
        fontSize: 20,
        fontWeight:'500',
        color:'#ffd900'
    },
    flatV:{
        flexDirection:'row',

        
    }

})