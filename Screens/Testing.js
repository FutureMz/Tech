import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, FlatList, Image, Alert } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faAngleRight, faAward, faBell, faHeadset, faQrcode,
    faShieldHeart, faEye, faEyeSlash,
    faUser,
    faBank,
    faNetworkWired,
    faSignal,
    faTableCells,
    faArrowsSplitUpAndLeft,
    faArrowsUpDown,
    faArrowsUpDownLeftRight,
    faMobilePhone,
    faUserLarge,
    faUserLargeSlash,
    faFootball,
    faSoccerBall,
    faW,
    faSackDollar
} from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons/faArrowCircleUp";

export function Practice1() {
    const [isBalanceVisible, setIsBalanceVisible] = useState(false);
    const [list, setList] = useState([]);
    const [text, setText] = useState(' funds added');
    const [amount, setAmount] = useState('$12,000')

    const toggleBalanceVisibility = () => {
        setIsBalanceVisible(!isBalanceVisible);
    };



    const handleAddMoneyPress = () => {
        const obj = {
            text, amount, time: new Date().toLocaleString()


        };
        setList([...list, obj]);
        // Alert.alert('Fund Added')
    };
    const renderItem = ({ item }) => (
        <View style={{}}>
            <Text style={{ fontSize: 20, }}>{item.text}                                         {item.amount}</Text>
            {/* <Text style={{}}> {item.amount}</Text> */}
            <Text style={{ fontSize: 12, marginTop: 10, marginBottom: 10 }}> {item.time}</Text>

        </View>

    );
    const openLink = () => {
        Linking.openURL("https://www.flaticon.com/free-icons/mobile-data");
    };


    return (<SafeAreaView style={{ backgroundColor: "#efecec" }}>
        <View style={{ flexDirection: 'row', height: 70, backgroundColor: '#f7f7f7' }}>
            <View style={{ flexDirection: 'row', padding: 25, alignItems: 'center' }}>
                <FontAwesomeIcon icon={faAward} color="gold" size={20} style={{}} />
                <Text style={{ fontSize: 20 }}>Hi, Oseribhor</Text>
            </View>
            <View style={{ alignItems: 'center', padding: 25, marginLeft: 90 }}>
                <FontAwesomeIcon icon={faHeadset} size={20} style={{ color: '#787878' }} />
            </View>
            <View style={{ alignItems: 'center', padding: 25, marginLeft: -40 }}>
                <FontAwesomeIcon icon={faQrcode} size={20} style={{ color: '#787878' }} />
            </View>
            <View style={{ alignItems: 'center', padding: 25, marginLeft: -40 }}>
                <FontAwesomeIcon icon={faBell} size={20} style={{ color: '#787878' }} />
            </View>
        </View>

        <View style={{
            backgroundColor: '#5bc499', borderRadius: 10, marginStart: 10, marginEnd: 10, height: 90
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 15,
                padding: 10,

            }}>
                <FontAwesomeIcon icon={faShieldHeart} color="white" />
                <Text style={{ color: 'white' }}>Available Balance:</Text>
                <TouchableOpacity onPress={toggleBalanceVisibility}>
                    <FontAwesomeIcon
                        icon={isBalanceVisible ? faEyeSlash : faEye}
                        size={20}
                        style={{ color: 'hsl(0, 0%, 100%)' }}
                    />
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    flex: 1,
                }}>
                    <Text style={{ color: 'white' }}>Transaction History</Text>
                    <FontAwesomeIcon icon={faAngleRight} color="white" size={15} />
                </View>
            </View>
            <View style={{ borderRadius: 20, flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 10, }}>

                <Text style={{ color: 'white', fontSize: '28', }}>
                    {isBalanceVisible ? amount : "*****"}
                </Text><View style={{ backgroundColor: 'white', borderRadius: 13, padding: 5, marginHorizontal: 5 }}>
                    <TouchableOpacity onPress={handleAddMoneyPress} >
                        <Text style={{ color: '#5bc499', fontSize: 12, textAlign: 'center' }}>+ Add Money</Text>
                    </TouchableOpacity></View>
            </View>
        </View>

        <View style={{ backgroundColor: '#f7f7f7', margin: 10, height: 120, borderRadius: 20, marginTop: 2 }}>
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={(item) => item.time.toString()}
            />
        </View>
        <View style={{ backgroundColor: '#f7f7f7', margin: 10, height: 80, borderRadius: 20, marginTop: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity><View style={{ alignItems: 'center' }}>
                <View style={{ backgroundColor: '#d4f2e7', borderRadius: 15, alignItems: 'center', padding: 10 }}>

                    <FontAwesomeIcon icon={faUser} size={20} style={{ color: '#5bc499' }} />
                </View>

                <View style={{ marginTop: 10 }}>

                    <Text style={{ color: '#8d8b8b' }}>To Opay</Text></View>

            </View ></TouchableOpacity>
            <TouchableOpacity><View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: '#d4f2e7', borderRadius: 10, alignItems: 'center', padding: 10, }}>
                    <FontAwesomeIcon icon={faBank} size={20} style={{ color: '#5bc499' }} />

                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: '#8d8b8b' }}>To Bank</Text></View></View></TouchableOpacity>

                    <TouchableOpacity><View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: '#d4f2e7', borderRadius: 10, alignItems: 'center', padding: 10 }}>
                    <FontAwesomeIcon icon={faArrowCircleUp} size={20} style={{ color: '#5bc499' }} />

                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: '#8d8b8b' }}>Withdraw</Text></View></View></TouchableOpacity>




        </View>

        <View style={{ backgroundColor: "#ffffff", height: 195, width: 370, marginLeft: 10, borderRadius: 10, alignItems: 'center', justifyContent:'space-around',flexDirection:'column'}}>

        <View style={{flexDirection:'row', alignItems:'center', padding:25,paddingBottom:10,columnGap:70}}>

        <TouchableOpacity><View style={{ alignItems: 'center' }}>
                <View style={{ backgroundColor: '#d4f2e7', borderRadius: 15, alignItems: 'center', padding: 10 }}>

                    <FontAwesomeIcon icon={faSignal} size={20} style={{ color: '#5bc499' }} />
                </View>

                <View style={{ marginTop: 10 }}>

                    <Text style={{ color: '#8d8b8b' }}>Airtime</Text></View>

            </View ></TouchableOpacity>
            <TouchableOpacity><View style={{ flexDirection: 'column',}}>
                <View style={{ backgroundColor: '#d4f2e7', borderRadius: 10, alignItems: 'center', padding: 10, }}>
                    <Image source={require('../assets/mobile-data.png')} style={{ width:23,height:20}}/>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: '#8d8b8b' }}>data</Text></View></View></TouchableOpacity>

           <TouchableOpacity><View style={{ alignItems:'center' }}>
                <View style={{ backgroundColor: '#d4f2e7', borderRadius: 15, alignItems: 'center', padding: 13 }}>
                    <FontAwesomeIcon icon={faSoccerBall} size={20} style={{ color: '#5bc499' }} />

                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: '#8d8b8b' }}>Withdraw</Text></View></View></TouchableOpacity>
                    
                  </View> 

                  <View style={{flexDirection:'row', alignItems:'center', padding:3,columnGap:70}}>

                  <TouchableOpacity><View style={{ alignItems: 'center' }}>
                <View style={{ backgroundColor: '#d4f2e7', borderRadius: 15, alignItems: 'center', padding: 10 }}>

                    <FontAwesomeIcon icon={faW} size={20} style={{ color: '#5bc499' }} />
                </View>
                

                <View style={{ marginTop: 10 }}>

                    <Text style={{ color: '#8d8b8b' }}>Owelth</Text></View>

            </View ></TouchableOpacity>
            <TouchableOpacity><View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: '#d4f2e7', borderRadius: 15, alignItems: 'center', padding: 10, }}>
                <FontAwesomeIcon icon={faSackDollar} size={20} style={{ color: '#5bc499' }} />
                </View>
                <View style={{ marginTop: 1 }}>
                    <Text style={{ color: '#8d8b8b',flexWrap:'wrap',width:50 }}>Refer & earn</Text></View></View></TouchableOpacity>

                    <TouchableOpacity><View style={{ alignItems:'center' }}>
                <View style={{ backgroundColor: '#d4f2e7', borderRadius: 15, alignItems: 'center', padding: 13 }}>
                    <FontAwesomeIcon icon={faSoccerBall} size={20} style={{ color: '#5bc499' }} />

                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: '#8d8b8b' }}>play4child</Text></View>
                    </View></TouchableOpacity>

                    </View>
        </View>
    </SafeAreaView >

    )
}
export default Practice1;