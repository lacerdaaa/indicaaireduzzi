import LoginComponent from "@/components/login";
import { ImageBackground, View, KeyboardAvoidingView } from "react-native";

export default function Login() {
  return (
    <ImageBackground
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
      source={require("./../assets/background1.png")}
      resizeMode="cover"
    >
      <LoginComponent />
    </ImageBackground>
  );
}
