import { View, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function WebUserRegister(){
    return(
        <View>
            <Text>Web Register</Text>
        </View>
    )
}