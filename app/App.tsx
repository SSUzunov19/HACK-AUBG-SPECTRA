import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView source={{ uri: 'https://hack-aubg-spectra.vercel.app/' }} style={{ flex: 1 }} />
  );
}