import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  PermissionsAndroid,
  StatusBar,
} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  useEffect(() => {
    (async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Cool Photo App Camera Permission',
            message:
              'Cool Photo App needs access to your camera ' +
              'so you can take awesome pictures.',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          alert('You can use the camera');
        } else if (PermissionsAndroid.RESULTS.DENIED) {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Permissions for record audio',
            message: 'Give permission to your device to record audio',
            buttonPositive: 'ok',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('permission record audio granted');
        } else {
          console.log('permission record audio denied');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    })();
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View
        style={{
          borderWidth: 1,
          borderColor: 'red',
          borderStyle: 'solid',
          flex: 1,
          height: '100%',
        }}>
        <WebView
          originWhitelist={['*']}
          allowsInlineMediaPlayback
          javaScriptEnabledAndroid={true}
          javaScriptEnabled={true}
          mediaPlaybackRequiresUserAction={false}
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: 'red',
            borderStyle: 'solid',

            height: '100%',
          }}
          source={{uri: 'http://localhost:3000'}}
        />
      </View>
    </>
  );
};

export default App;
