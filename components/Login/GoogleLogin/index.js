import { View, Platform } from 'react-native';

import MobileGoogleLogin from './mobile';
import WebGoogleLogin from './web';

// WebBrowser.maybeCompleteAuthSession();

export default function GoogleLogin(){
    return (
        <View>
            {Platform.OS === 'web' ? (
                <WebGoogleLogin />
            ) : (
                <MobileGoogleLogin />
            )}
        </View>
    );
}