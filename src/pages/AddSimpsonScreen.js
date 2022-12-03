import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, useColorScheme, ScrollView, SafeAreaView } from 'react-native';
import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

const AddSimpsonScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>Read the docs to discover what to do next:</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  }
});


export default AddSimpsonScreen;