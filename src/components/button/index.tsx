import {
  View,
  TouchableOpacity,
  Text,
  TextProps,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { s } from "./style";


type Props = TouchableOpacityProps & {};

function Button({ children, style, onPress, activeOpacity, ...rest }: Props) {
  return (
    <TouchableOpacity style={[s.button, style]} onPress={onPress} {...rest}>
      {children}
    </TouchableOpacity>
  ); 
}

function Title({ children }: TextProps) {
  return <Text style={s.text}>{children}</Text>;
}

Button.Title = Title

export default Button