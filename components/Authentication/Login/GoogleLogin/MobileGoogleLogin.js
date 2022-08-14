import * as React from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { View, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { Button, Image } from "@rneui/themed";

import * as api from '../../../../api';
import { styles } from "./styles";

export default function MobileGoogleLogin(props){
    const [authRequest, authResponse, promptAsync] = Google.useAuthRequest({
        expoClientId: '678691912945-68mb7u3j7i0pg7b3tcca872rrlgil9r0.apps.googleusercontent.com',
        iosClientId: '678691912945-due7bsd92rdqsnl0guk592hh6k6eotgo.apps.googleusercontent.com',
        androidClientId: '678691912945-5a1uguhb8429vrsvmurel57a94a5brau.apps.googleusercontent.com',
        webClientId: '678691912945-mse19g9148gdkdo0b4spkijjsobk0rc8.apps.googleusercontent.com'
      });

      React.useEffect(() => {
        checkLoginStatus();
      });

      React.useEffect(() => {
        if (authResponse?.type === 'success') {
            getUserData(authResponse.authentication.accessToken);
        }
    }, [authResponse]);

    async function saveToSecureStore(key, value) {
        await SecureStore.setItemAsync(key, value);
      }
      
      async function getValueFromSecureStore(key) {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
            return result;
        } else {
            return false;
        }
      }

    async function checkLoginStatus(){
        const credential = await getValueFromSecureStore('loginStatus');
        if(credential){
            props.setLoginStatus(credential);
        }
    }

    async function getUserData(accessToken) {
        let userInfoResposnse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers: { Authorization: `Bearer ${accessToken}`}
        })
        userInfoResposnse.json().then(data => {
            props.setUserDataLoaded({
                fullName: data.name,
                firstName: data.given_name,
                lastName: data.family_name,
                userName: '',
                email: data.email,
                profileImgUrl: '',
                googleId: data.id,
                googleProfileImgUrl: data.picture,
                googleAccessToken: accessToken,
                registerDate: new Date()
            });
            reqUserFromDB(data.id);
        });
    }

    async function reqUserFromDB(googleId){
        
        try {
            await api.getUserByGoogleId(googleId)
                .then(async (response)=> {
                    props.setUserDataLoaded(response.data);
                    saveToSecureStore("loginStatus", response.data._id); //userId, not googleId
                })
        } catch(error) {

            if(error.response.status==409){
                props.setRegisterStatus(true);
            }
        }
    }

    async function logout(){
        props.setLoginStatus(false);
        await SecureStore.deleteItemAsync('loginStatus');
    }
    
    return(
        <View style={{ width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {props.loginStatus ? (
                <Button
                    containerStyle={styles.mobileLoginButtonContainer}
                    buttonStyle={styles.mobileLoginButton}
                    titleStyle={styles.mobileLoginButtonText}
                    title="Logout"
                    onPress={()=>logout()}
                />
            ) : (
                <Button
                    containerStyle={styles.mobileLoginButtonContainer}
                    buttonStyle={styles.mobileLoginButton}
                    titleStyle={styles.mobileLoginButtonText}
                    onPress={()=>promptAsync({ showInRecents: true })}
                    // if add useProxy: false, ios gives message saying "something went wrong"
                    // default will have a pop-up with a message "the app at ... is asking you to sign in to another service"
                >
                    <Image
                        source={require('./GoogleLogo.png')}
                        style={styles.mobileLoginButtonIcon}
                    />
                    <Text style={styles.mobileLoginButtonText} >Sign in with Google</Text>
                </Button>
            )}
        </View>
    )
}