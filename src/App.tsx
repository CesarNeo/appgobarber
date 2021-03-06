import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" />
    <View style={{ flex: 1, backgroundColor: '#312e8' }} />
  </>
);

export default App;
