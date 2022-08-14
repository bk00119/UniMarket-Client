import React from 'react';
import {View, Text, Button} from 'react-native'

function PostScreen(props) {
    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Text>PostScreen</Text>
            {/* <Button title="go home" onPress={()=>props.navigation.navigate('Home')} /> */}
            <Button
        title="Go to Details... again"
        onPress={() => props.navigation.navigate('Post')}
      />
      <Button title="Go to Home" onPress={() => props.navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
        </View>
    );
}

export default PostScreen;