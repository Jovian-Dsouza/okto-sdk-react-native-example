import React from 'react';
import App from './src/App';
import { OktoProvider } from 'okto-sdk-react-native';
import { OKTO_CLIENT_API } from '@env';
import { BuildType } from 'okto-sdk-react-native';

export default function AppMain() {
  return (
    <OktoProvider apiKey={OKTO_CLIENT_API} buildType={BuildType.SANDBOX}>
      <App />
    </OktoProvider>
  );
}
