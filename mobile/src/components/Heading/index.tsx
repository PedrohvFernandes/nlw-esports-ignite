import { View, Text, ViewProps } from 'react-native'

import { styles } from './styles'

// A viewProps é pra a gente dizer que a gente quer passar todas as propiedades que uma view recebe como estilização por exemplo, caso a gente queira alinha esse elemento é um posicionamento diferente
// Ou seja com essa tipagem(interface/contrato) eu consigo passar as propiedades personalizadas minhas e eu extendo tudo que uma view props tem como direito de propiedades
interface Props extends ViewProps {
  title: string
  subtitle: string
}

// A gente não precisa passar propiedade por propiedade da ViewProps, a gente utiliza o ...rest que é o restante, ou seja tudo que a ViewProps pode oferecer e passar o title e o subtitle que a gente conhece de forma esplicita
export function Heading({ title, subtitle, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}
