import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { TextInput, Text, StyleSheet, View } from "react-native";

export const InputField = ({ control, name, placeholder, rules, errors }) => {
  return (
    <>
      <Controller
        control={control}
        render={({ field }) => (
          <View>
            <TextInput
              style={styles.textInput}
              placeholder={placeholder}
              placeholderTextColor={"#000"}
              onChangeText={field.onChange}
              value={field.value}
            />
          </View>
        )}
        name={name}
        rules={rules}
      />
      {errors && errors[name] && (
        <Text style={styles.error}>{errors[name].message}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 50,
    width: 330,
    color: "#000",
    marginVertical: 10,
  },
  error: {
    color: "red",
    fontSize: 12,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 23,
  },
});
