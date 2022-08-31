import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

const Input = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {
  return (
    <View>
      {/*<TextInput
        value={value} 
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={styles.input}
      />*/}

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <View
              style={[
                styles.container,
                { borderColor: error ? "red" : "#e8e8e8" },
              ]}
            >
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
              />
            </View>
            {error && (
              <Text style={{ color: "red", alignSelf: "stretch" }}>
                {error.message || "Error"}
              </Text>
            )}
          </>
        )}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 375,
    height: 50,
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
  },
  input: {},
});
