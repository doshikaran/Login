import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import SignInButtons from "../Components/SignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignInScreen = () => {
  //const [username, setUsername] = useState();
  //const [email, Setemail] = useState();
  //const [password, setPassword] = useState();
  //const [confirmpassword, setConfirmPassword] = useState();

  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");
  const navigation = useNavigation();

  const onRegisterInPressed = () => {
    //console.warn("you have registered");
    navigation.navigate("EmailConfirm");
  };

  const onTermsPressed = () => {
    console.warn("terms pressed");
  };

  const onPrivacyPressed = () => {
    console.warn("privacy pressed");
  };

  const onSigninPress = () => {
    //console.warn("just sign in");
    navigation.navigate("SignIn");
  };

  const { height } = useWindowDimensions();
  return (
    <ScrollView>
      <View style={styles.maincontainer}>
        <Text style={styles.createtxt}>CREATE AN ACCOUNT</Text>
        <Input
          name="username"
          control={control}
          placeholder="USERNAME"
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username should atleast be of 3 characters",
            },
            maxLength: {
              value: 10,
              message: "Username shouldnt exceed 10 characters",
            },
          }}
        />
        <Input
          name="email"
          control={control}
          placeholder="EMAIL"
          rules={{
            required: "INVALID EMAIL",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
        />
        <Input
          name="password"
          control={control}
          placeholder="PASSWORD"
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters",
            },
          }}
        />
        <Input
          name="confirmpassword"
          control={control}
          placeholder="CONFIRM PASSWORD"
          secureTextEntry
          rules={{
            validate: (value) => value === pwd || "Password doesnt match",
          }}
        />

        <Button
          text="REGISTER"
          onPress={handleSubmit(onRegisterInPressed)}
          type="PRIMARY"
        />

        <Text style={styles.text}>
          By registering, you confirm all our{" "}
          <Text style={styles.link} onPress={onTermsPressed}>
            Terms of Use{" "}
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy.
          </Text>
        </Text>

        <SignInButtons />
        <Button
          text="Already have an Account? Please Sign In"
          onPress={onSigninPress}
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
  createtxt: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    margin: 10,
  },
  text: {
    color: "gray ",
    marginVertical: 10,
  },
  link: {
    color: "blue",
  },
});
