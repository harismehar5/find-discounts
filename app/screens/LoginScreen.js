import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import Input from "../components/Input";
import Button from "../components/Button";
import { colors } from "../utils.js/theme";

export default function LoginScreen({ navigation }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // const validate = () => {
  //   if (userName === "" || userName.length === 0) {
  //     Toast.show({
  //       type: "error",
  //       text1: "Error",
  //       text2: "Please Enter User Name Or Email",
  //     });
  //   } else if (password === "" || password.length === 0) {
  //     Toast.show({
  //       type: "error",
  //       text1: "Error",
  //       text2: "Please Enter Password",
  //     });
  //   } else {
  //     var loginObject = {
  //       email: userName,
  //       password: password,
  //     };
  //     login(loginObject);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.inner_container}> */}
      <Image style={styles.logo} source={require("../assets/logo.png")} resizeMode="contain" />
      <Input
        placeholder={"Enter Email"}
        value={userName}
        onChangeText={setUserName}
        label={"Email"}
      />
      <Button
        title={"Login"}
        color={colors.primary}
        onPress={()=> {
          navigation.navigate("HomeTab")
        }}
        loading={loading}
      />
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          marginBottom: 20,
          justifyContent: "center",
        }}
      >
        <Text style={[styles.forgot_style, styles.text_style]}>
          Don't have an account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style={styles.signup_text_style}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
      {/* <ActivityIndicator  size="small" color="#0000ff" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#ffffff",
  },
  logo: {
    height: 175,
    width: 175,
    marginVertical: 40,
    alignSelf: "center",
  },
  continue_style: {
    marginLeft: 25,
  },
  text_style: {
    color: "grey",
    marginVertical: 10,
    fontSize: 12,
  },
  center_text_style: {
    alignSelf: "center",
  },
  signup_text_style: {
    color: colors.primary,
    marginVertical: 10,
    fontSize: 12,
    fontWeight: "bold",
  },
});
