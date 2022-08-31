import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const ForgotPasswordScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onConfirmPress = () => {
    //console.warn("username confirmed");
    navigation.navigate("NewPassword");
  };

  const onSigninPress = () => {
    //console.warn("just sign in");
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView>
      <View style={styles.maincontainer}>
        <Text style={styles.createtxt}>FORGOT PASSWORD</Text>
        <Input
          name="username"
          control={control}
          placeholder="ENTER YOUR USERNAME"
          rules={{
            required: "Username is required",
          }}
        />

        <Button
          text="CONFIRM"
          onPress={handleSubmit(onConfirmPress)}
          type="PRIMARY"
        />

        <Button
          text="Back to Sign In"
          onPress={onSigninPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

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
  btnview: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
