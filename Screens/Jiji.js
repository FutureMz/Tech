import { SafeAreaView, View, StyleSheet, Image, Text, ImageBackground } from "react-native";
import * as React from 'react';
import { Searchbar } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { height, width } from "@fortawesome/free-brands-svg-icons/fa42Group";

export function Jiji() {
    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <SafeAreaView style={{ flex: 0, backgroundColor: '#21c02e' }} >
            <View style={{marginTop:50, height:170}}>
            <View>
               <Text style={{color:'white', fontSize:30, textAlign:'center'}}>What are you looking for?</Text> 
            </View>

            <View style={{marginTop:50}}>
            <Searchbar
            placeholder="Type your search here"
            placeholdercolor='red'
            onChangeText={setSearchQuery}
            value={searchQuery}
            right={()=>(<FontAwesomeIcon icon={faFilter} size={20} color="#13c713" style={{marginHorizontal:10}}/>)}
            />
            </View>
            </View>

            <View style={styles.bar1}>
            <View>
            <Image source={require("../assets/green fire icon.jpg")} style={styles.img}/>
            <Text style={styles.imgT}>Trending</Text>
            </View>

            <View>
            <Image source={require("../assets/car icon.jpg")} style={styles.img}/>
            <Text style={styles.imgT}>Vehicles</Text>
            </View>

            <View>
            <Image source={require("../assets/house icon.jpg")} style={styles.img}/>
            <Text style={styles.imgT}>Property</Text>
            </View>

            </View>

            <View style={styles.bar1}>
            <View>
            <Image source={require("../assets/phone icon.jpg")} style={styles.img}  />
            <Text style={{ fontSize:20, color:'#858282', width:80}}>Phones&Tablets</Text>
            </View>

            <View>
            <Image source={require("../assets/computer icon.jpg")} style={styles.img}/>
            <Text style={styles.imgT}>Electronics</Text>
            </View>

            <View>
            <Image source={require("../assets/chair icon.jpg")} style={styles.img}/>
            <Text style={{fontSize:16, color:'#858282', width:94, textAlign:'center'}}>Home Appliances & Furniture</Text>
            </View>

            </View>

            <View style={styles.bar1}>
            <View>
            <Image source={require("../assets/lipstick icon.jpg")} style={styles.img}/>
            <Text style={{fontSize:16, color:'#858282'}}>Health & Beauty</Text>
            </View>

            <View>
            <Image source={require("../assets/gown icon.jpg")} style={styles.img}/>
            <Text style={styles.imgT}>Fashion</Text>
            </View>

            <View>
            <Image source={require("../assets/target icon.jpg")} style={styles.img}/>
            <Text style={{fontSize:16, color:'#858282', width:94, textAlign:'center'}}>Sports, Arts & Outdoors</Text>
            </View>

            </View>

            <View style={styles.bar1}>
            <View>
            <Image source={require("../assets/profile icon.jpg")} style={styles.img}/>
            <Text style={{fontSize:16, color:'#858282', width:94, textAlign:'center'}}>Seeking Work CVs</Text>
            </View>

            <View>
            <Image source={require("../assets/shake icon.jpg")} style={styles.img}/>
            <Text style={styles.imgT}>Services</Text>
            </View>

            <View>
            <Image source={require("../assets/briefcase icon.jpg")} style={styles.img}/>
            <Text style={styles.imgT}>Jobs</Text>
            </View>

            </View>
            </SafeAreaView>
    )}

    const styles = StyleSheet.create({

        container: {
            backgroundColor:'green',
            padding:20
        },
        img:{
            marginTop:20,
            width:75,
            height:75
        },
        bar1:{
            backgroundColor:'#fafafa',
            flexDirection:'row',
            justifyContent:'space-evenly',

        },
        imgT:{
            fontSize:18,
            color:'#858282',
            textAlign:'center'
        
        },
        shadow: {
            width:150,
            height:150,
            borderRadius: 600,
            borderWidth:0,
            backgroundColor:'white',
            borderColor:'grey',
            marginHorizontal:'auto',
            shadowColor:'grey',
            shadowRadius: 0,
            shadowOpacity: 1,
            shadowOffset:{height: 0, width:-70}
            
        },
    
    })