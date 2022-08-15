import { createStackNavigator  } from "@react-navigation/stack";
import { useState, useEffect } from 'react';
import { Button, Text } from '@rneui/themed';
import { Platform } from 'react-native'; //REMOVE THIS LATER

import GoogleLogin from '../components/Authentication/Login/GoogleLogin';
import UserRegister from "../components/Authentication/UserRegister";

export default function AuthRoutes(props) {
    const Stack = createStackNavigator();
    const [userData, setUserData] = useState(null);
    const [registerStatus, setRegisterStatus] = useState(false); //CHANGE BACK TO THIS
    // const [registerStatus, setRegisterStatus] = Platform.OS==='ios' ? useState(false) : useState(true);
    
    let authProps = {
        loginStatus: props.loginStatus,
        setLoginStatus: props.setLoginStatus,
        userData: userData,
        setUserData: setUserData,
        registerStatus: registerStatus,
        setRegisterStatus: setRegisterStatus
    }

    useEffect(() => {
        if(props.registerStatus){

        }
      }, [props.registerStatus]);

    return (
        <Stack.Navigator
            backBehavior="history"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#FFF',
                    shadowRadius: 0,
                    shadowOffset: {
                        height: 0,
                    }
                },
                headerTitle: ''
            }}
        >
            {registerStatus ? (
                <Stack.Screen
                    name="Register"
                    children={()=><UserRegister {...authProps} />}
                    options={{
                        headerLeft: () => (
                          <Button
                            onPress={() => setRegisterStatus(false)}
                            title="Back"
                            //CHANGE THIS LATER
                            buttonStyle={{backgroundColor:'#FFF', marginLeft: 10}}
                            titleStyle={{color: '#000'}}
                          />
                        ),
                    }}
                />
            ) : (
                <Stack.Screen
                    name="Login"
                    children={()=><GoogleLogin {...authProps} />}
                    options={{
                        header: () => null
                    }}
                />
            )}
        </Stack.Navigator>
    );
}
