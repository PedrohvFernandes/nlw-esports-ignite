import { useRef, useEffect } from 'react'
import { StatusBar } from 'react-native'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'
import { Subscription } from 'expo-modules-core'
import * as Notifications from 'expo-notifications'

import { Routes } from './src/routes'
import { Loading } from './src/components/Loading'
import { Background } from './src/components/Background'

// Poderia colocar a config da notification direto aqui, em vez de importa
import './src/services/notificationConfigs'
import { getPushNotificationToken } from './src/services/getPushNotificationToken'

export default function App() {
  // fontsLoaded é pra saber se a fonte foi carregada ou não, no caso ele é um boolean
  // Padronizando as nossas fontes para toda a aplicação
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  // Subscription --> serve pra observar quando chegar uma solicitação, notificação etc
  const getNotificationListener = useRef<Subscription>()
  // Esse é pra quando chegar a notificação e voce ir direto para o APP
  const responseNotificationListener = useRef<Subscription>()

  // Pega o token do dispositivo dinamicamente
  useEffect(() => {
    getPushNotificationToken()
  })

  // Para testar usando uma interface back-end: https://expo.dev/notifications
  useEffect(() => {
    // Escutar quando chega a notificação
    getNotificationListener.current =
      Notifications.addNotificationReceivedListener(notification => {
        console.log(notification)
      })

    // Escutar quando eu responder(clicar) em uma notificação
    responseNotificationListener.current =
      Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response)
      })

    // Quando se usa um return no useEffect ele faz uma limpeza dos listerners(escutadores) do sistema
    return () => {
      if (
        getNotificationListener.current &&
        responseNotificationListener.current
      ) {
        Notifications.removeNotificationSubscription(
          getNotificationListener.current
        )
        Notifications.removeNotificationSubscription(
          responseNotificationListener.current
        )
      }
    }
  }, [])

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
