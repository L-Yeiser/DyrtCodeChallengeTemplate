import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.wrapper}>
        <SafeAreaView>
          <ScrollView>
            <Text style={styles.header}>Welcome</Text>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#edf2f4',
  },
  content: {
    flex: 1,
  },
  header: {
    alignSelf: 'center',
    fontSize: 40,
    color: '#8d99ae',
    flex: 1,
    marginBottom: 30,
  },
  directions: {
    color: '#2b2d42',
  },
});

export default App;
