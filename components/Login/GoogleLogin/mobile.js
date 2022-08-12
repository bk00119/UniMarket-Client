import * as React from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { TouchableOpacity, View, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { Button, Image } from "@rneui/themed";

import * as api from '../../../api';
import { styles } from "./styles";

export default function MobileGoogleLogin(){
    const [loginStatus, setLoginStatus] = React.useState(false);
    const [userDataLoaded, setUserDataLoaded] = React.useState(false);

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
            console.log("User Logged In!");
            return result;
        } else {
            console.log("User Logged Out!");
            return false;
        }
      }

    async function checkLoginStatus(){
        const credential = await getValueFromSecureStore('loginStatus');
        if(credential){
            setLoginStatus(credential);
        }
    }

    async function getUserData(accessToken) {
        let userInfoResposnse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers: { Authorization: `Bearer ${accessToken}`}
        })
        userInfoResposnse.json().then(data => {
            reqUserFromDB(data.id);
        });
    }

    async function reqUserFromDB(googleId){
        await api.getUserByGoogleId(googleId)
            .then(async (response)=> {
                setUserDataLoaded(response.data);
                saveToSecureStore("loginStatus", response.data._id); //userId, not googleId
            })
    }

    function showUserInfo(){
        if(loginStatus){
            return(
                <View>
                    <Text>User ID: {loginStatus}</Text>
                </View>
            )
        }
    }

    async function logout(){
        setUserDataLoaded(false);
        setLoginStatus(false);
        await SecureStore.deleteItemAsync('loginStatus');
    }
    
    return(
        <View>
            {showUserInfo()}
            {loginStatus ? (
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
                        source={require('../../../assets/GoogleLogo.png')}
                        style={styles.mobileLoginButtonIcon}
                    />
                    <Text style={styles.mobileLoginButtonText} >Sign in with Google</Text>
                </Button>
            )}
        </View>
    )
}