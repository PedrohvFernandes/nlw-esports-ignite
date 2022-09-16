import { TouchableOpacity, View, Text } from 'react-native'
import { GameController } from 'phosphor-react-native'

import { DuoInfo } from '../DuoInfo'

import { styles } from './styles'
import { THEME } from '../../theme'

export interface DuoCardProps {
  hourEnd: string
  hoursStart: string
  id: string
  name: string
  useVoiceChannel: boolean
  weekDays: string[]
  yearPlaying: number
}

interface Props {
  data: DuoCardProps
  onConnect:() => void
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />
      <DuoInfo label="Tempo de jogo" value={`${data.yearPlaying} anos`} />
      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hoursStart} - ${data.hourEnd}`}
      />
      <DuoInfo
        label="Chamada de áudio"
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController size={20} color={THEME.COLORS.TEXT} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  )
}
