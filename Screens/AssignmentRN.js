import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export function AssignmentRN() {
  return (
    <ScrollView style={{ backgroundColor: 'grey' }}>
      <View style={{ margin: 5 }}>
        <Text style={styles.text}>MY ANDROID/iOS DEVELOPMENT BIO</Text>

        <View style={styles.row}>
          <View style={{ flex: 1 }} >
            <Text style={styles.textHead}>INTRODUCTION TO MOBILE DEVELOPMENT:</Text>
            <Text>  Android and iOS development are pivotal disciplines in the realm of mobile technology, shaping the way people interact with digital services and applications worldwide. Each platform offers unique tools, frameworks, and ecosystems that developers harness to create innovative and user-friendly mobile experiences. </Text>
          </View>
          <Image
            source={require("./assets/images.jpeg")}
            style={{
              width: "40%",
              height: 200,
              borderRadius: 50,
              alignSelf: "flex-end",
              borderColor: "black",
              borderWidth: 3,
              margin: 3
            }} />
        </View>

        <View style={styles.row2}>
          <View style={{ flex: 1 }} >
            <Text style={styles.textHead}>ANDRIOD DEVELOPMENT:</Text>
            <Text>  Android, developed by Google, is the world's most widely used mobile operating system. Android applications are primarily built using Java, Kotlin, or increasingly, using Google's Flutter framework for cross-platform development. Android offers a diverse range of devices, from smartphones and tablets to wearables and IoT devices, each running on a variety of hardware configurations.</Text>
          </View>
          <Image
            source={require("./assets/andriod.jpg")}
            style={{
              width: "40%",
              height: 200,
              borderRadius: 20,
              borderColor: "black",
              borderWidth: 3,
              marginHorizontal: 3
            }}
          />
        </View>

        <Text style={{ margin: 4 }}> Android developers leverage Android Studio, Google's official Integrated Development Environment (IDE), along with powerful APIs and libraries provided by the Android SDK. These tools enable developers to craft robust applications that integrate seamlessly with Google services, utilize advanced features like location-based services, notifications, and deep integration with hardware sensors.</Text>

        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.textHead}> iOS DEVELOPMENT:</Text>
            <Text>  iOS, developed by Apple, powers the iconic iPhone, iPad, and iPod Touch devices. iOS applications are primarily developed using Swift or Objective-C programming languages within Apple's Xcode IDE. Apple's ecosystem is known for its strict adherence to design principles, security standards, and seamless integration across its hardware and software offerings.</Text>
          </View>
          <Image
            source={require("./assets/ios.png")}
            style={{
              width: "40%",
              height: 200,
              borderRadius: 100,
              alignSelf: "flex-end",
              borderColor: "black",
              borderWidth: 3,
            }} />
        </View>

        <Text style={{ marginTop: -8, margin: 3 }}>  iOS developers utilize frameworks like UIKit, SwiftUI, and Core Data to build responsive and visually appealing applications that leverage Apple's powerful hardware capabilities. iOS applications are known for their smooth performance, intuitive user interfaces, and extensive ecosystem of third-party integrations through the App Store.</Text>

        <View style={styles.row2}>
          <View style={{ flex: 1 }}>
            <Text style={styles.textHead}> KEY SKILLS AND TECHNOLOGY:</Text>
            <Text>  Successful Android and iOS developers possess a blend of technical skills and creativity. They are proficient in mobile application architecture, user interface design, data storage solutions, and performance optimization techniques. Both platforms require developers to stay updated with the latest advancements in mobile technology, including new OS features, security enhancements, and industry best practices.</Text>
          </View>
          <Image
            source={require("./assets/KeyS.png")}
            style={{
              width: "40%",
              height: 200,
              borderRadius: 50,
              alignSelf: "flex-end",
              borderColor: "black",
              borderWidth: 3,
              margin: 3
            }} />
        </View>

        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.textHead}> IMPACT AND FUTURE:</Text>
            <Text> Android and iOS development continue to drive innovation across industries, from healthcare and finance to entertainment and education. Mobile applications have revolutionized how businesses engage with customers, streamline operations, and deliver personalized experiences. As technology evolves, developers play a crucial role in pushing boundaries, adapting to new challenges, and shaping the future of mobile computing.</Text>
          </View>
          <Image
            source={require("./assets/futureIM.jpg")}
            style={{
              width: "40%",
              height: 200,
              borderRadius: 50,
              alignSelf: "flex-end",
              borderColor: "black",
              borderWidth: 3,
              margin: 3
            }} />
        </View>

        <View style={styles.row2}>
          <View style={{ flex: 1 }}>
            <Text style={styles.textHead}>CONCLUSION:</Text>
            <Text>In conclusion, Android and iOS development represent dynamic fields where creativity meets technical prowess. Developers passionate about mobile technology have the opportunity to create impactful applications that reach millions of users worldwide, contributing to the ever-growing landscape of digital innovation.</Text>
          </View>
          <Image
            source={require("./assets/Conclud.png")}
            style={{
              width: "40%",
              height: 200,
              borderRadius: 50,
              alignSelf: "flex-end",
              borderColor: "black",
              borderWidth: 3,
              margin: 3
            }} />
        </View>


      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'black',
    fontWeight: "bold",
    fontStyle: "italic",
    padding: 5,
    textAlign: "center",
    marginTop: 33
  },
  row: {
    flexDirection: 'row',
    borderRadius: 10,
    marginLeft: 5,
    margin: 10,
  },
  row2: {
    flexDirection: 'row-reverse',
    borderRadius: 10,
    marginLeft: 5,
    marginTop: 10,

  },
  textHead: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginVertical: 10

  },
  textDis: {
    fontSize: 2,
    fontStyle: 'italic'
  }
});
