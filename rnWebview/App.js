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
  const cameraPermission = async () => {
    let granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera Permission',
        message: 'App needs access to your camera ' + 'so others can see you.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  };

  const micPermission = async () => {
    let granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: 'Audio Permission',
        message: 'App needs access to your audio / microphone',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the Microphone');
    } else {
      console.log('Microphone permission denied');
    }
  };

  useEffect(() => {
    cameraPermission();
    micPermission();
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
          useWebKit
          userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
          originWhitelist={['*']}
          allowsInlineMediaPlayback
          bounces={true}
          allowsFullscreenVideo
          domStorageEnabled={true}
          allowUniversalAccessFromFileURLs={true}
          startInLoadingState
          scalesPageToFit
          startInLoadingState
          scalesPageToFit
          javaScriptEnabled={true}
          source={{uri: 'http://127.0.0.1:3000'}}
        />
      </View>
    </>
  );
};

export default App;
