import Index from './components/(tabs)/index';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <>
      <Index />
      <StatusBar style="auto" />
    </>
  );
}
