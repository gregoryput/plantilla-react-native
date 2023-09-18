import { View, StyleSheet, TextInput, Alert, Animated } from "react-native";
import React, { useRef, useState } from "react";
import { Button, Text } from "react-native-paper";
import { InputField } from "../../components/Input/InputField";
import { useForm } from "react-hook-form";

import { InputFieldPassword } from "../../components/Input/InputFieldPassword";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/slice/authSlice";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  let dispatch = useDispatch();
  // const navigation = useNavigation();
  // navigation.navigate("Home");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log("Datos del formulario:", data.username);
    if (data.username === "usuario" && data.password === "123456") {
      dispatch(LoginUser([data.username, data.password, true]));
    } else {
      Alert.alert("Advertencia", "Usuario incorrecto ");
    }
  };

  return (
    <Animated.View style={styles.container}>
      <View style={{ marginBottom: 50 }}>
        <Text variant="displayLarge">Login</Text>
      </View>
      <InputField
        control={control}
        name="username"
        placeholder="Usuario"
        rules={{
          required: "El usuario es obligatorio",
          maxLength: {
            value: 30,
            message: "La contraseña debe tener al maximo 30 caracteres",
          },
        }}
        errors={errors}
      />

      <InputFieldPassword
        control={control}
        name="password"
        placeholder="Contraseña"
        type="password"
        rules={{
          required: "La contraseña es obligatoria",
          minLength: {
            value: 6,
            message: "La contraseña debe tener al menos 6 caracteres",
          },
        }}
        errors={errors}
      />
      <View style={{ marginTop: 50 }}>
        <Button mode="contained" onPress={handleSubmit(onSubmit)}>
          Iniciar Sesion
        </Button>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    padding: 10,
    borderWidth: 0,
    borderColor: "#ccc",
    borderRadius: 12,
    width: 330,
    backgroundColor: "#9a9a9a",
    color: "#fff",
    marginVertical: 10,
  },
});
