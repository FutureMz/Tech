import { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar, SafeAreaView, } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export function TodoList() {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    function pushText() {
        const obj = {text, time: new Date().getTime()}
        setList([...list, obj])
        // console.log(list);
    }
    return (
        <SafeAreaView style={{backgroundColor:'black'}}>
            <Text style={styles.header}>TODO LIST DISPLAY </Text>

            <TextInput 
            style={styles.input} 
            placeholder='Enter your name'
            onChangeText={(inp)=>{setText(inp)}} />

            <TouchableOpacity onPress={pushText} style={{
                backgroundColor: 'green', borderRadius: 40, padding: 20, alignItems: 'center', marginTop: 20
            }}>
                 <Text style={{ color: "blue", fontWeight: 'bold' }}>ADD TO LIST</Text>
            </TouchableOpacity>
            {/* {list.map((item)=><Text>{item.time}</Text>)} */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        marginTop: StatusBar.currentHeight,
        backgroundColor:'black'
    },
    header: {
        padding:25,
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'center',
        color: 'green'
    },
    input: {
        borderWidth: 1,
        padding: 20,
        borderRadius: 30,
        fontSize: 16,
        marginTop: 30,
    
    
    }
})


const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
