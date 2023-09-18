import React, { useState } from "react";
import { Controller } from "react-hook-form";
import {
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import EyeOn from "../../../assets/Icons/eyeOn";
import EyeOff from "../../../assets/Icons/eyeOff";

export const InputFieldPassword = ({
  control,
  name,
  placeholder,
  rules,
  errors,
  password,
}) => {
  const [showPassword, setShowPassword] = useState(password);

  return (
    <>
      <Controller
        control={control}
        render={({ field }) => (
          <View>
            <TextInput
              style={styles.textInput}
              placeholder={placeholder}
              secureTextEntry={!showPassword}
              placeholderTextColor={"#000"}
              onChangeText={field.onChange}
              value={field.value}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword === true ? (
                <EyeOn width={24} height={24} fill="#000" />
              ) : (
                <EyeOff width={24} height={24} fill="#000" />
              )}
            </TouchableOpacity>
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
    paddingVertical:10,
    paddingHorizontal:15,
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
    textAlign: "left",
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 23,
  },
});
