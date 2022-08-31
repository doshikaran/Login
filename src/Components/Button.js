import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Button = ({ onPress, text, type, bgcolor, fgcolor }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgcolor ? { backgroundColor: bgcolor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgcolor ? { color: fgcolor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: "black",
  },
  container_TERTIARY: {},
  text: {
    color: "white",
    fontWeight: "bold",
  },
  container_SECONDARY:{
    borderColor: 'black',
    borderWidth: 1,
    width: 150, 
  },
  text_SECONDARY: {
    color: "grey",
  },
  text_TERTIARY: {
    color: "black",
  },
});
