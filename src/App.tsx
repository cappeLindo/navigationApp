import { useFonts, JetBrainsMono_400Regular, JetBrainsMono_700Bold, JetBrainsMono_400Regular_Italic } from "@expo-google-fonts/jetbrains-mono";
import { Routes } from './routes/main.routes';


export default function App() {

  const [fontsLoaded] = useFonts({
    JetBrainsMono_400Regular,
    JetBrainsMono_700Bold,
    JetBrainsMono_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <Routes />
  );
}
