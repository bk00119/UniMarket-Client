import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export default function Landing(){
    return (
      <View style={styles.landingContainer}>
        <Text style={styles.landingText}>Uni Market</Text>
      </View>
    );
}