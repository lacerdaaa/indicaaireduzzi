import { View, Text, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { s } from './styles';

export default function LoginComponent() {
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
        <Image source={require('../../assets/reduzziLogoBlue.png')} style={s.logo}/>
        <Text style={s.title}>Bem vindo(a)</Text>
        <Text style={s.subtitle}>Insira seus dados e faça seu login</Text>
      </LinearGradient>
   </View>
  );
}
