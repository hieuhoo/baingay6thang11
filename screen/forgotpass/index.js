import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import MainButton from "../../components/MainButton";
import MainInput from "../../components/MainInput";
export default function ForgotScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const onGoBack = () => {
    navigation.goBack();
  };
  const onForgot = () => {
    if (name.trim() == "" || !name) {
      alert("Không được để trống họ và tên !");
    } else if (email.trim() == "" || !email) {
      alert("Không được để trống email !");
    } else if (password.trim() == "" || !password) {
      alert("Không được để trống mật khẩu !");
    } else {
        findAccount();
    }
  };
  const findAccount = async () => {
    let userData = await AsyncStorage.getItem("userData");
    if (userData) {
      userData = JSON.parse(userData);
      let arr = [...userData];
      arr = arr.filter(
        (value) => value.email.toLocaleLowerCase() == email.toLocaleLowerCase()
      );
      if (arr.length > 0) {
        alert("Check your Email!");
        return;
      } else {
        alert("Your account doesn't exist");
      }
    } else {
      userData = [];
      userData.push({
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      });
    }
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 12 }}>
      <View style={{ flexDirection: "row", marginTop: 50 }}>
        <TouchableOpacity
          onPress={onGoBack}
          style={{
            backgroundColor: "#f4f4f4",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <Image
            style={{ height: 20, width: 20, resizeMode: "contain" }}
            source={require("../../assets/icon_back.png")}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: "#000",
            fontSize: 25,
            paddingLeft: 20,
            fontWeight: "bold",
            letterSpacing: 5,
          }}
        >
          Tìm lại mật khẩu
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            alignSelf: "center",
            height: 100,
            resizeMode: "contain",
            width: 100,
          }}
          source={require("../../assets/Juice.png")}
        />
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#2FDBBC",
            fontSize: 25,
            marginBottom: 50,
          }}
        >
          DrinkApp
        </Text>
        <MainInput
          title={"Họ và tên"}
          placeholder={"Nhập họ và tên"}
          value={name}
          onChangeText={setName}
        />
        <MainInput
          title={"Email"}
          placeholder={"Nhập email"}
          value={email}
          onChangeText={setemail}
        />

        <MainButton
          onPress={onForgot}
          style={{ marginTop: 12 }}
          title={"Tìm"}
        />
      </View>
    </View>
  );
}
