import React from 'react';
import {View, Text} from 'react-native'
import GoogleLogin from '../../components/Authentication/Login/GoogleLogin';

function ProfileScreen(props) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Profile Screen</Text>
            <GoogleLogin loginStatus={props.loginStatus} setLoginStatus={props.setLoginStatus} />
        </View>
    );
}

export default ProfileScreen;