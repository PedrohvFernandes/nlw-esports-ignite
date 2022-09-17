import * as Notifications from 'expo-notifications'

// Com essa função conseguimos pegar o token do dispositivo
export async function getPushNotificationToken() {
  // Pra pedir permissão pra receber notificações
  const { granted } = await Notifications.getPermissionsAsync()

  if(!granted) {
    await Notifications.requestPermissionsAsync()
  }

  if(granted){
    const pushToken = (await Notifications.getExpoPushTokenAsync()).data
    console.log('Notification TOKEN => ', pushToken)
    return pushToken
  }
}
