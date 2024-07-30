import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, } from 'react-native';
import {useState} from 'react'

export function Login() {
    const [email, setEmail] = useState('');
    return (
        <ImageBackground source={{ uri: "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
            style={styles.bg}>
            <View style={styles.container}>
                <Text style={styles.header}>Login Here -{}</Text>
                <TextInput style={styles.input}
                    placeholder='Enter Email'
                    onChangeText={(inp) => setEmail(inp)} />
                    <TextInput style={styles.input}
                    placeholder='Enter Password'/>
                    <Text>{email}</Text>
                {/* <Button title='Login' onPress={()=>console.log("Button Clicked")}/> */}
                <TouchableOpacity style={styles.button} onPress={() => setEmail("You are Logged In")}>
                    <Text style={{ fontSize: 35, fontWeight: 'bold', color:'red' }}>Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );

}


const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        padding: 20
    },
    bg: {
        height: "100%"
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'red',
        
    },
    input: {
        borderWidth: 2,
        borderColor: 'red',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: 'white',
        color: 'green',
        fontSize: 20
    },
    button: {
        backgroundColor: 'grey',
        padding: 15,
        borderRadius:50,
        alignItems:'center',
        marginTop: 20

    }
})