import { View, Platform } from 'react-native';

import MobileGoogleLogin from './MobileGoogleLogin';
import WebGoogleLogin from './WebGoogleLogin';

export default function GoogleLogin(props){
    return (
        <View style={{ width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {Platform.OS === 'web' ? (
                <WebGoogleLogin />
            ) : (
                <MobileGoogleLogin {...props} />
            )}
        </View>
    );
}