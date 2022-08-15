import * as React from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { View, Text, SafeAreaView } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { Button, Image } from "@rneui/themed";

import * as api from '../../../../api/users';
import { styles } from "./styles";
import { Switch } from 'react-native-gesture-handler';

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
            props.setUserData({
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
                    props.setUserData(response.data);
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

    function showAgreement(props){
        switch(props){
            case "privacy policy":
                console.log("SHOW PRIVACY POLICY");
                break;
            case "terms of use": 
                console.log("SHOW TERMS OF USE");
        }
    }
    
    return(
        <SafeAreaView style={styles.mobileAuthenticationContainer}>
            {props.loginStatus ? (
                <Button
                    containerStyle={styles.mobileLoginButtonContainer}
                    buttonStyle={styles.mobileLoginButton}
                    titleStyle={styles.mobileLoginButtonText}
                    title="Logout"
                    onPress={()=>logout()}
                />
            ) : (
                <View style={styles.mobileLoginContainer}>
                    <View style={styles.mobileLoginTitleContainer} >
                        <Text style={styles.mobileLoginTitle} >Let's Get Started!</Text>
                        <Text style={styles.mobileLoginSubTitle} > Please login in with your school email</Text>
                    </View>
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
                    <View style={styles.mobileLoginAgreementsContainer} >
                        <Text style={styles.mobileLoginAgreements}>
                            By loggin in you are agreeing to the{"\n"}
                            <Text style={styles.mobileLoginAgreementsUnderline} onPress={()=>showAgreement("privacy policy")}>
                                Privacy Policy
                            </Text> 
                            {" "}and{" "} 
                            <Text style={styles.mobileLoginAgreementsUnderline} onPress={()=>showAgreement("terms of use")}>
                                Terms of Use
                            </Text>
                        </Text>
                    </View>
                </View>
            )}
        </SafeAreaView>
    )
}