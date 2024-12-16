import { View, Text, Image, TextInput, Switch, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { s } from "./styles";
import React, { useState } from "react";
import { CheckBox } from "react-native-elements";

export default function LoginComponent() {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={s.container}>
      <LinearGradient
        colors={[
          "rgba(255,255,255,0.7)",
          "rgba(255,255,255,0.4)",
          "rgba(255,255,255,0.7)",
        ]}
        style={s.gradient}
      >
        <Image
          source={require("../../assets/reduzziLogoBlue.png")}
          style={s.logo}
        />
        <Text style={s.title}>Bem vindo</Text>
        <Text style={s.subtitle}>Insira seus dados e faça seu login</Text>
        <View style={s.inputs}>
          <TextInput
            placeholder="Digite seu CPF"
            keyboardType="phone-pad"
            style={s.input}
            returnKeyType="done"
            placeholderTextColor={"#AAA"}
          />
          <TextInput
            placeholder="Digite seu telefone"
            keyboardType="phone-pad"
            style={s.input}
            returnKeyType="done"
            placeholderTextColor={"#AAA"}
          />
        </View>
        <View style={s.forgot}>
          <View>
            <CheckBox
              title="Lembrar de mim"
              checked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
              containerStyle={s.checkboxContainer}
              textStyle={s.checkboxText} 
              checkedColor="#757575"
            />
          </View>
          <TouchableOpacity>
            <Text style={s.forgotText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
