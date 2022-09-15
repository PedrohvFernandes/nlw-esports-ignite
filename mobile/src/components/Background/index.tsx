import { ImageBackground } from 'react-native'

import backgroundImg from '../../assets/background-galaxy.png'

import { styles } from './styles'

interface Props {
  // https://reactnative.dev/docs/react-node
  // https://www.reactenlightenment.com/react-nodes/4.1.html
  children: React.ReactNode
}

// O children(filho) nesse caso é tudo que estiver inserido/dentro nesse componente, por exemplo um status bar, text, imagem
export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={backgroundImg}
      // Pra tirar o delay, memorizando a imagem padrao e ja carregar ela mais rapido na nossa aplicação
      defaultSource={backgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  )
}
