import React, { useContext, useEffect } from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import Background from "../Stylesheet/Background";
import LinearGradient from "react-native-linear-gradient";
import { AuthContext } from "../config/AuthProvider";
import base64 from "react-native-base64";
import { QRCode } from "react-native-custom-qr-codes";

export const QrCode = ({ route }) => {
  let event = route.params.event;
  const { user, appData } = useContext(AuthContext);
  const URL = base64.encode(JSON.stringify(
    {
      ev: event.id,
      us: user.id,
      em: user.email,
      nm: user.name,
    },
  ));
  return (
    <SafeAreaView>
      <Background>
        <View style={{ height: 200, width: "100%", backgroundColor: "#191919" }}>
          <LinearGradient colors={["#231F20", "#312A2C"]} style={{ marginTop: 20 }}>
            <View style={{
              height: 80,
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <Image source={require("../Assets/NewLogo.png")}
                     style={{
                       height: 62,
                       width: 100,
                       padding: 20,
                       marginLeft: 10,
                     }} />
            </View>
          </LinearGradient>

          <View
            style={{
              // flexDirection: "row",
              backgroundColor: "rgba(0,0,0,0.4)",
              height: 350,
              marginLeft: 30,
              justifyContent: "center",
              marginRight: 30,
              marginTop: 120,
              width: 300,
            }}>

            <View style={{ alignSelf: "center" }}>
              <QRCode
                content={URL}
                codeStyle="dot"
                size={200}
              />
            </View>

            <View style={{ marginTop: "1%" }}>
              <Text style={{ color: "#fff", fontSize: 18, paddingTop: 5, textAlign: "center" }}>VRDA1
                Event</Text>
              <Text style={{
                color: "#fff",
                fontSize: 18,
                // marginTop: "-2%",
                textAlign: "center",
              }}>{user.email}</Text>
            </View>
          </View>
        </View>
      </Background>
    </SafeAreaView>
  );
};
