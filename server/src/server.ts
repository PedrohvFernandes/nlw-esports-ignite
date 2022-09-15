// Http methods: GET, POST, PUT, PATCH, DELETE

//API RESTful https://www.redhat.com/pt-br/topics/api/what-is-a-rest-api#rest https://www.hostinger.com.br/tutoriais/api-restful#Como_Surgiu_o_REST https://aws.amazon.com/pt/what-is/restful-api/ padronizar e organizar os protocolos de comunicação e desenvolvimento na internet

// Http code --> ele mostra pra a gente se a resposta que a gente esta recebendo é uma resposta foi valida, se deu certo, se não deu, qual que é o tipo de resposta que a gente ta recebendo do nosso back-end response.status(201).json([]), ou seja o http code 201 significa que algo foi criado, algo deu certo na criação, diferente do 200 que é uma resposta generica "Ok"

import express from 'express'
import cors from 'cors'

import { PrismaClient } from '@prisma/client'
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes'
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string'

const app = express()

app.use(express.json())
// O cors não deixa outros front-end acessar o nosso back-end, somente o nosso, quais endereços podem acessar nosso back-end: origin: SeuEndereçoDoFrontendNoAr
// app.use(cors({
//   origin: 'https://MeuEndereço.com.br'
// }))
app.use(cors())

const prisma = new PrismaClient({
  // Pra mostrar qual a query foi realizada
  log: ['query']
})

app.get('/games', async (request, response) => {
  // Selecionando todos os games e o include é tipo o join um relacionamento para a ads. Ou seja uma lista dos games e quantos anuncios aquele game tem relacionado a ele
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  })

  return response.status(200).json(games)
})

// Sempre que eu for criar um ad eu preciso do id do game
app.post('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id
  // Pegando o corpo da requisição
  const body: any = req.body

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearPlaying: body.yearPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hoursStart: convertHourStringToMinutes(body.hoursStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel
    }
  })

  return res.status(201).json(ad)
})

// '/games/:id/ads' --> concatenação de recursos e no express pra identificar que o id é um parametro ou seja uma info dinamica eu preciso colocar dois pontos na frente do id --> '/games/324234/ads' --> return 324234
app.get('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id

  // Eu quero encontrar varios anuncios relacionado ao id do game, mas sem mostrar o discord
  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearPlaying: true,
      hoursStart: true,
      hourEnd: true
    },
    where: {
      // Como o nome na esquerda(banco) e na direita(variavel) são iguais, entao não precisa colocar gameId: gameId
      gameId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return res.json(
    ads.map(ad => {
      return {
        // Retorna todos os dados da forma que eles estão vindo do banco de dados(... spread operator no objeto) e formata  os dias da semana e a hora que vem como int e é transformada em string
        ...ad,
        weekDays: ad.weekDays.split(','),
        hoursStart: convertMinutesToHourString(ad.hoursStart),
        hourEnd: convertMinutesToHourString(ad.hourEnd)
      }
    })
  )
})

app.get('/ads/:id/discord', async (req, res) => {
  const adId = req.params.id

  //findUniqueOrThrow --> encontrar único e a pessoa pode mandar um id de um anuncio que não exista, com isso caso não ache o id do anuncio o Throw dispara um erro
  // Eu quero encontrar o discord relacionado ao id do anuncio
  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true
    },
    where: {
      id: adId
    }
  })

  return res.json({
    discord: ad.discord
  })
})

app.listen(3333)
