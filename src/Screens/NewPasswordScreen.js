import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const NewPasswordScreen = () => {
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation();

  const onSubmitPress = () => {
    //console.warn("new password submitted");
    navigation.navigate("HomeScreen");
  };

  const onSigninPress = () => {
    //console.warn("just sign in");
    navigation.navigate("SignIn");
  };
  return (
    <ScrollView>
      <View style={styles.maincontainer}>
        <Text style={styles.createtxt}>RESET YOUR PASSWORD</Text>
        <Input
          name="code"
          control={control}
          placeholder="ENTER THE CODE"
          rules={{
            required: "Code is required",
          }}
        />
        <Input
          name="password"
          control={control}
          placeholder="ENTER YOUR NEW PASSWORD"
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />

        <Button
          text="SUBMIT"
          onPress={handleSubmit(onSubmitPress)}
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

export default NewPasswordScreen;

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
});
