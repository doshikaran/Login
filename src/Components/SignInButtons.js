import { View, Text } from "react-native";
import React from "react";
import Button from "../Components/Button";

const SignInButtons = () => {
  const onSignInApple = () => {
    console.warn("apple sign in ");
  };

  const onSignInGoogle = () => {
    console.warn("google sign in");
  };
  return (
    <>
      <Button
        text="SIGN IN WITH APPLE"
        onPress={onSignInApple}
        type="PRIMARY"
        bgcolor="#e3e3e3"
        fgcolor="#363636"
      />
      <Button
        text="SIGN IN WITH GOOGLE"
        onPress={onSignInGoogle}
        type="PRIMARY"
        bgcolor="#FAE9EA"
        fgcolor="#DD4D44"
      />
    </>
  );
};

export default SignInButtons;
