import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store/store';
import GoogleLogin from './components/Login/GoogleLogin';

export default function App() {
  return (
    <Provider store={store}>
        <View style={styles.container}>
          <GoogleLogin />
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
