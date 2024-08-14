import React, { useCallback, useEffect, useState } from "react";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faAngleDoubleDown, faAngleRight, faArrowsSplitUpAndLeft, faArrowsUpDown, faArrowUp, faAward, faBank, faBell, faDatabase, faDollarSign, faEye, faHandHoldingHeart, faHeadset, faMobilePhone, faMoneyBill, faNetworkWired, faPhoneAlt, faPiggyBank, faQrcode, faSackDollar, faSatellite, faSatelliteDish, faShield, faSoccerBall, faTelevision, faTv, faTvAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { SafeAreaView, View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import * as SplashScreen from 'expo-splash-screen';


export function Opay(){


    
        const [isBalanceVisible, setIsBalanceVisible] = useState(false);
        const [list, setList] = useState([]);
        const [text, setText] = useState('Account Credited');
        const [amount, setAmount] = useState('#100,000')

    const toggleBalanceVisibility = () => {
        setIsBalanceVisible(!isBalanceVisible);
    };

    const MoneyNotify= () => {
        const obj = {
            text, amount, time: new Date().toLocaleString()};
        setList([...list, obj]);
    
    };

    const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 3000));
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

    return(
        <SafeAreaView style={{backgroundColor:'#f5f4f4'}}>
    <View style={{flexDirection:'row', position:'relative', height: 70, backgroundColor: '#f5f4f4'}}>
        <View style={{ flexDirection: 'row', padding: 25, alignItems: 'center' }}>
        <Image source={require("../assets/images.jpeg")} style={{ width: 50, height: 50, borderRadius: 30, }} />
        <FontAwesomeIcon icon={faAward} color="#d1bf1e" size={30} style={{bottom:7, marginLeft:55, position:'absolute'}}/>
        <Text style={{fontSize:20, marginLeft:10, fontWeight:'bold' }}>Hi, Future</Text>
        </View>

        <View style={{ alignItems: 'center', padding: 25, marginLeft: 90 }}>
            <FontAwesomeIcon icon={faHeadset} size={22}/>
        </View>

        <View style={{ alignItems: 'center', padding: 25, marginLeft: -40 }}>
            <FontAwesomeIcon icon={faQrcode} size={22}/>
        </View>

        <View style={{ alignItems: 'center', padding: 25, marginLeft: -40 }}> 
            <FontAwesomeIcon icon={faBell} size={22}/>
        </View>
    </View>

    <View style={{ backgroundColor: '#17c77e', borderRadius: 10, marginStart: 10, marginEnd: 10, height: 100, marginTop:20}}>
        <View style={{flexDirection:'row'}}>
        <View>
        
        <View style={{flexDirection:'row', margin:20}}>
        <FontAwesomeIcon icon={faShield} color="white" />
        <Text style={{color:'white', fontSize:'16'}}>Available Balance</Text>
        <TouchableOpacity onPress={toggleBalanceVisibility}>
        <FontAwesomeIcon icon={isBalanceVisible ? faEyeSlash : faEye} 
        color="white" 
        size={20} 
        style={{marginLeft:3}}/>
        </TouchableOpacity>
        </View>
        
        <View style={{margin:20, bottom:23}}>
        <Text style={{fontSize:25, fontWeight:'bold', color:'white'}}>{isBalanceVisible ? amount : "*****"}</Text>
        </View>
        </View>
        <View>
        <TouchableOpacity>
        <View style={{margin:20, marginLeft:30, flexDirection:'row'}}>
            <Text style={{color:'white', fontSize:'16', textDecorationLine: 'underline'}}>Transaction History</Text>
            <FontAwesomeIcon icon={faAngleRight} color="white" />
        </View>
        </TouchableOpacity>
        <View style={{margin:20, marginLeft:60, bottom:25, }}>
            <TouchableOpacity style={{backgroundColor: 'white', borderRadius:50, padding:12}} onPress={MoneyNotify}>
                <Text style={{color:'#17c77e', fontSize:'16'}}> + Add Money</Text>
            </TouchableOpacity>
        </View>
        </View>
        </View>
    </View>

    <View style={{ backgroundColor:'white', height: 120, borderRadius: 20 }}>
        <FlatList
        data={list}
        renderItem={({item})=> {
            return(
            <View style={{margin:10}}>
            <Text style={{ fontSize: 20, marginTop: 5 }}>{isBalanceVisible ? `${item.text}                                     ${item.amount}` : "****"}</Text>
            <Text style={{ fontSize: 12, marginTop: 10, marginBottom: 10 }}> {isBalanceVisible? item.time:" "}</Text>
            </View>
            )
        }

        }
        keyExtractor={(item) => item.time.toString()}/>
    </View>

    <View style={{backgroundColor: 'white', margin: 10, height: 90, borderRadius: 20, marginTop: 15, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
        
    <TouchableOpacity>
        <View style={{alignItems:'center'}}>
        <View style={{ backgroundColor: '#effff9', borderRadius: 15, padding: 10}}>
            <FontAwesomeIcon icon={faUser} size={25} color='#17c77e'/>
        </View>
        <View style={{marginTop:10}}>
            <Text style={{fontWeight:'300'}}>To Opay</Text>
        </View>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <View style={{alignItems:'center'}}>
        <View style={{ backgroundColor: '#effff9', borderRadius: 15, padding: 10}}>
            <FontAwesomeIcon icon={faBank} size={25} color='#17c77e'/>
        </View>
        <View style={{marginTop:10}}>
            <Text style={{fontWeight:'300'}}>To Bank</Text>
        </View>
        </View>
        </TouchableOpacity>


        <TouchableOpacity>
        <View style={{alignItems:'center'}}>
        <View style={{ backgroundColor: '#effff9', borderRadius: 15, padding: 10}}>
            <FontAwesomeIcon icon={faArrowUp} size={25} color='#17c77e'/>
        </View>
        <View style={{marginTop:10}}>
            <Text style={{fontWeight:'300'}}>Withdraw</Text>
        </View>
        </View>
        </TouchableOpacity>
    
    </View>
    

    <View style={{backgroundColor: 'white', margin: 10, height: 180, borderRadius: 20, marginTop: 10,  }}>

<View style={{marginTop:10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around'}}>
    
        <TouchableOpacity>
        <View style={{alignItems:'center'}}>
        <View style={{ backgroundColor: '#effff9', borderRadius: 50, padding: 10}}>
            <FontAwesomeIcon icon={faMobilePhone} size={20} color='#17c77e'/>
        </View>
        <View style={{marginTop:10}}>
            <Text style={{fontWeight:'300'}}>Airtime</Text>
        </View>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <View style={{alignItems:'center'}}>
        <View style={{ backgroundColor: '#effff9', borderRadius: 50, padding: 10}}>
            <FontAwesomeIcon icon={faSatelliteDish} size={20} color='#17c77e'/>
        </View>
        <View style={{marginTop:10}}>
            <Text style={{fontWeight:'300'}}>Data</Text>
        </View>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <View style={{alignItems:'center'}}>
        <View style={{ backgroundColor: '#effff9', borderRadius: 50, padding: 10}}>
            <FontAwesomeIcon icon={faSoccerBall} size={20} color='#17c77e'/>
        </View>
        <View style={{marginTop:10}}>
            <Text style={{fontWeight:'300'}}>Betting</Text>
        </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{alignItems:'center'}}>
        <View style={{ backgroundColor: '#effff9', borderRadius: 50, padding: 10}}>
            <FontAwesomeIcon icon={faTv} size={20} color='#17c77e'/>
        </View>
        <View style={{marginTop:10}}>
            <Text style={{fontWeight:'300'}}>TV</Text>
        </View>
        </View>
        </TouchableOpacity>
        
        </View>


        <View style={{ marginTop:25, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity>
        <View style={{alignItems:'center'}}>
        <View style={{ backgroundColor: '#effff9', borderRadius: 50, padding: 10}}>
            <FontAwesomeIcon icon={faPiggyBank} size={20} color='#17c77e'/>
        </View>
        <View style={{marginTop:10}}>
            <Text style={{fontWeight:'300'}}>Owelth</Text>
        </View>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <View style={{alignItems:'center'}}>
        <View style={{ backgroundColor: '#effff9', borderRadius: 50, padding: 10}}>
            <FontAwesomeIcon icon={faSackDollar} size={20} color='#17c77e'/>
        </View>
        <View style={{marginTop:10}}>
            <Text style={{fontWeight:'300'}}>Refer & Earn</Text>
        </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{alignItems:'center'}}>
        <View style={{ backgroundColor: '#effff9', borderRadius: 50, padding: 10}}>
            <FontAwesomeIcon icon={faHandHoldingHeart} size={20} color='#17c77e'/>
        </View>
        <View style={{marginTop:10}}>
            <Text style={{fontWeight:'300'}}>Play4aChild</Text>
        </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{alignItems:'center'}}>
        <View style={{ backgroundColor: '#effff9', borderRadius: 50, padding: 10}}>
            <FontAwesomeIcon icon={faNetworkWired} size={20} color='#17c77e'/>
        </View>
        <View style={{marginTop:10}}>
            <Text style={{fontWeight:'300'}}>More</Text>
        </View>
        </View>
        </TouchableOpacity>

        </View>



    </View>

    



        </SafeAreaView>
    )
}
