import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import GcashHome from './screens/GcashHome';

export default function App() {
  return (
    <PaperProvider>
      <GcashHome />
    </PaperProvider>
  );
}