import React from 'react';

import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(isDarkMode)

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello Testing 123...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 30,
  },
  whiteText : {
    fontSize: 30,
    color : "yellow",
  },
  darkText : {
    fontSize: 30,
    color : "red",
  }
});

export default AppPro;
