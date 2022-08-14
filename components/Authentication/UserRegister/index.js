import { View, Platform } from 'react-native';

import MobileUserRegister from './mobile';
import WebUserRegister from './web';

export default function UserRegister(props){
    return (
        <View style={{ width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {Platform.OS === 'web' ? (
                <WebUserRegister />
            ) : (
                <MobileUserRegister {...props} />
            )}
        </View>
    );
}