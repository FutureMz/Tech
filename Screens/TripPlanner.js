import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { SafeAreaView, View, StyleSheet, Image, Text, ImageBackground, ScrollView } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useCallback, useEffect, useState } from "react";
import { Manrope_400Regular, Manrope_500Medium } from "@expo-google-fonts/manrope"
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";

export function TripPlanner() {

    const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({ Manrope_400Regular, Manrope_500Medium, Pacifico_400Regular });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f1f1' }}>
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <Image source={require("../assets/images.jpeg")} style={styles.img}/>
                    <Text style={styles.header}>Trip Planner</Text>
                    <View style={styles.search}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </View>
                </View>
            

            <View style={styles.imageContainer}>
            <ImageBackground source={require("../assets/waterfall2.jpg")} style={styles.img2}>
            
            <View style={styles.container2}> 
            <Text style={styles.header2}>Perfect for you</Text>
            </View>

            <View style={styles.container3}>
            <Text style={styles.footerText}>What to do</Text>
            

            <View style={styles.button}>
            <FontAwesomeIcon icon={faAngleRight}/>   
            </View>
            </View>
            
            <View style={styles.bottomLeftContainer}>
            <Text  style={styles.bottomLeftText}>Niagara Falls</Text>
            <Text style={styles.Description}>Canada, province of Alberta and Northwest Terriotories, near the town of Fort Smith</Text>
            </View>
            </ImageBackground>
            </View>

            <View style={styles.Bar2}>
            <Text style={styles.bottomDownText}>Categories</Text>
            <View style={styles.container4}>
                <Text style={{ fontSize: 17, fontWeight: "400", color:'#8b8989' }}>See all</Text>
                <View style={styles.button}>
                    <FontAwesomeIcon icon={faAngleRight}/>
                </View>
            </View>
            </View>

            <ScrollView horizontal>
            <View style={styles.imageBar}>
           <View>
            <Image source={require("../assets/moutain.jpg")} style={styles.img3}/>
            <Text style={{margin:10}}>Mountains</Text>
            </View>

            <View style={{marginLeft:10}}>
            <Image source={require("../assets/camp.jpg")} style={styles.img3}/>
            <Text style={{margin:10}}>Camp</Text>
            </View> 

            <View style={{marginLeft:10}}>
            <Image source={require("../assets/park.jpg")} style={styles.img3}/>
            <Text style={{margin:10}}>Parks</Text>
            </View>
            
            <View style={{marginLeft:10}}>
            <Image source={require("../assets/food.jpeg")} style={styles.img3}/>
            <Text style={{margin:10}}>Food</Text>
            </View> 

            <View style={{marginLeft:10}}>
            <Image source={require("../assets/flight.jpg")} style={styles.img3}/>
            <Text style={{margin:10}}>Flight</Text>
            </View> 

            </View>
            </ScrollView>

            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        color: 'white'
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    header: {
        fontSize: 25,
        fontWeight: "bold"
    },
    search: {
        backgroundColor: "white",
        borderRadius: 50,
        padding: 10,
        paddingHorizontal: 10
    },

    container2: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 50,
        margin: 10, 
        alignSelf: 'flex-start',
        
    },
    img2:{ 
        flex: 1,
        justifyContent:'space-between',
        flexDirection: 'column',
        
        
    },
    header2:{
        fontSize: 15,
        color: 'white',
    },
    imageContainer:{
        overflow:'hidden',
        borderRadius: 30,
        marginTop: 40,
        height: 380,
        width: 370,
        
    },
    footerText: {
        fontSize: 20,  
        fontWeight: '300',
        fontStyle:'italic',
        color:'#000000ff'
    },
    container3: {
        margin:10,
        marginTop:20,
        position: 'absolute',
        right: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
        
             
    },
    button:{
        backgroundColor: "white",
        borderRadius: 50,
        padding: 1,
        paddingHorizontal: 1,
        marginLeft: 10,

    },
    bottomLeftContainer: {
        marginBottom: 20,
        position: 'absolute',
        bottom: 1,
        marginHorizontal:10,
        alignItems:'baseline'
    },
    bottomLeftText: {
        fontSize: 30,
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    Description: {
        fontSize: 22,
        color: '#ffffffff',
        fontFamily:'Pacifico_400Regular'

    },
    Bar2:{
        flexDirection: "row",
        marginTop:50,
        alignItems: 'center',
        justifyContent:'space-between'
    },
    bottomDownText: {
        fontSize: 30,
        color: 'black',
        fontWeight: '600',
        
    },
    container4: {
        margin:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'  
    },
    img3:{
        width: 130,
        height: 130,
        borderRadius: 30,
    },
    imageBar:{
        flexDirection: "row",
        justifyContent: 'space-evenly',
        margin:10,
        

        
        
    }

})