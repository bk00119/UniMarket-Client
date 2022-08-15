import * as React from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { Button, View, Text } from 'react-native';
import { useSelector , useDispatch } from 'react-redux';
import * as WebBrowser from 'expo-web-browser';

// import * as api from '../../../../api';

WebBrowser.maybeCompleteAuthSession();

export default function WebGoogleLogin(){
    function login(){
        console.log('login');
    }
    function logout(){
        console.log('logout');
    }
    return(
        <View>
            <Button
                title={"web login"}
                onPress={()=>login()}
            />
        </View>
    )
}