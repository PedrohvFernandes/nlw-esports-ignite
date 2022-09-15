// 1080 --> 18:00

export function convertMinutesToHourString(minutesAmount: number) {
  const hours = Math.floor(minutesAmount / 60)
  const minutes = minutesAmount % 60

  // Estava retornando 18:0 colocando so o tempo bruto. Com isso, tivemos que converter usando o String e o padStart faz com que adicione um 0 na frente do numero de horas e minutos, caso o numero do tempo tenha apenas um 0
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}` 

}
