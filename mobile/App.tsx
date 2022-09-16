import { StatusBar } from 'react-native'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'

import { Routes } from './src/routes'
import { Loading } from './src/components/Loading'
import { Background } from './src/components/Background'

export default function App() {
  // fontsLoaded é pra saber se a fonte foi carregada ou não, no caso ele é um boolean
  // Padronizando as nossas fontes para toda a aplicação
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })
  return (
    // O nosso background fica por volta de toda a nossa aplicação e tudo é repassado pro background atraves da propiedade children(filho)
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  )
}
