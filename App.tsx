import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {  // Use functional component syntax for cleaner structure

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Hello World!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  helloContainer: { 
    alignItems: 'center',
  },
  helloText: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color:"blue",
  },
});

export default App;
