import LoginComponent from '@/components/login';
import { ImageBackground, View } from 'react-native';
import { s } from './pages/styles/style';


export default function login() {
 return (
    <ImageBackground style={s.background}
    source={require('./../assets/background1.png')}
    resizeMode='cover'>
      
      <LoginComponent/>

    </ImageBackground>
  );
}