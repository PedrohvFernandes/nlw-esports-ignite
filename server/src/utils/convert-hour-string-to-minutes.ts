// 18:00 --> 1080 --> 18(horas) x 60(minutes) + 00 = 1080

export function convertHourStringToMinutes(hourString: string){
  // Fazendo o split eu separo as horas e minutos e transformo em um numero --> "18:00" --> ["18","00"] --> [18, 00]
  const [hours, minutes] = hourString.split(':').map(Number)

  const minutesAmount = (hours * 60) + minutes

  return minutesAmount
}