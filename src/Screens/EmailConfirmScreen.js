import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const EmailConfirmScreen = () => {
  const { control, handleSubmit, watch } = useForm();
  const username = watch("username");

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    //console.warn("you have confirmed");
    navigation.navigate("HomeScreen");
  };

  const onResendPress = () => {
    console.warn("code resent");
  };

  const onSigninPress = () => {
    // console.warn("just sign in");
    navigation.navigate("SignIn");
  };
  return (
    <ScrollView>
      <View style={styles.maincontainer}>
        <Text style={styles.createtxt}>EMAIL VERIFICATION</Text>
        <Input
          name="username"
          placeholder="ENTER YOUR USERNAME"
          control={control}
          rules={{
            required: "Username is required",
          }}
        />
        <Input
          name="code"
          placeholder="ENTER YOUR CODE"
          control={control}
          rules={{
            required: "Confirmation code is required",
          }}
        />

        <Button
          text="CONFIRM"
          onPress={handleSubmit(onConfirmPressed)}
          type="PRIMARY"
        />

        <View style={styles.btnview}>
          <Button
            text="Resend the code"
            onPress={onResendPress}
            type="SECONDARY"
          />
          <Button
            text="Back to Sign In"
            onPress={onSigninPress}
            type="SECONDARY"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EmailConfirmScreen;

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
