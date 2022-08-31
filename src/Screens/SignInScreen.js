import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import Input from "../Components/Input";
import Button from "../Components/Button";
import SignInButtons from "../Components/SignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const SignInScreen = () => {
  // const [username, setUsername] = useState();
  //const [password, setPassword] = useState();
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();

  const onSignInPressed = (data) => {
    //console.warn("Sign in to home screen");
    navigation.navigate("HomeScreen");
  };

  const onForgotPasswordPressed = () => {
    //console.warn("forgotpasswword");
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
    //console.warn("go sign up");
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView>
      <View style={styles.maincontainer}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <Input
          name="username"
          placeholder="USERNAME"
          control={control}
          rules={{ required: "USERNAME REQUIRED" }}
        />
        <Input
          name="password"
          placeholder="PASSWORD"
          secureTextEntry
          control={control}
          rules={{
            required: "PASSWORD REQUIRED",
            minLength: {
              value: 8,
              message: "Password should have atleast 8 character",
            },
          }}
        />

        <Button
          text="SIGN IN"
          onPress={handleSubmit(onSignInPressed)}
          type="PRIMARY"
        />

        <Button
          text="FORGOT PASSWORD"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SignInButtons />

        <Button
          text="Create a new Account"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  maincontainer: {
    padding: 20,
    alignItems: "center",
  },
  logo: {
    maxWidth: 300,
    maxHeight: 150,
    width: "70%",
  },
});
