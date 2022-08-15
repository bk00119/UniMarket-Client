import { useState, useEffect } from 'react';
import {View, Text} from 'react-native'
import * as SecureStore from 'expo-secure-store';

import GoogleLogin from '../../components/Authentication/Login/GoogleLogin';

function ProfileScreen(props) {
    const [userId, setUserId] = useState(null);
    
    useEffect(()=>{
        if(!userId){
            getUserId();
        }
    },[]);

    async function getUserId(){
        let user = await SecureStore.getItemAsync('loginStatus');
        setUserId(user);
    }
    
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Profile Screen</Text>
            <Text>{userId}</Text>
            <GoogleLogin loginStatus={props.loginStatus} setLoginStatus={props.setLoginStatus} />
        </View>
    );
}

export default ProfileScreen;