export interface GameParams {
  id: string
  title: string
  bannerUrl: string
}

// é uma tipagem pra dizer quais são as rotas disponiveis na nossa aplicação, pra parar de dar erro no navigation.navigate('game', {id, title, bannerUrl})
// Se é preciso passar parametros pra proxima tela voce faz o objeto com os parametros game: { id: string etc}, se não é só o nome da rota e undefined
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      game: GameParams
    }
  }
}
