import { Text } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from "./styles";

export default function MobileUserRegister(props){
    const [nickname, setNickame] = useState(null);

    useEffect(()=> {
        if(nickname==null){
            console.log("NICKNAME IS REQUIRED");
        }
    },[nickname])
    function register(){
        console.log(nickname);
    }
    return (
        <SafeAreaView style={styles.mobileUserRegisterContainer}>
            <Text style={styles.mobileUserRegisterTitle}>Set Up Your Nickname</Text>
            <Input 
                placeholder='Enter Nickname'
                containerStyle={styles.mobileUserRegisterTextInputContainer}
                inputContainerStyle={styles.mobileUserRegisterTextInputInputContainer}
                inputStyle={styles.mobileUserRegisterTextInput}
                onChangeText={value => setNickame(value)}
            />
            <Button
                containerStyle={styles.mobileUserRegisterButtonContainer}
                buttonStyle={styles.mobileUserRegisterButton}
                titleStyle={styles.mobileUserRegisterButtonContainerText}
                title="Join"
                onPress={()=>register()}
            ></Button>
        </SafeAreaView>
    );
}