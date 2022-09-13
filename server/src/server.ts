// Pra importar uma dependencia na extensão JS server.js usando "type": "commonjs" com require
// const express = require('express')

//Ecma Script models "type": "module" extensão MJS -> server.mjs
import express from 'express'

const app = express()

// Primeira rota/endpoint
// 1Parametro: é qual o endereço o usuario vai estar acessando nesse site: www.minhaapi.com na rota /users www.minhaapi.com/users
// 2Parametro: é qual a função que vai ser executado ao o usuario entrar nessa rota users
app.get('/users', (req, res) => {
  console.log('Acessou Users')

  // A gente sempre tem que retornar algo como resposta, pra saber se foi concluido a requisição da rota
  // return res.send('Acessou Users')

  // Posso retornar um array[], um objeto {}, texto'', somente tipos primitivos
  return res.json([
    {id: 1, name: 'Anuncio 1'},
    {id: 2, name: 'Anuncio 2'},
    {id: 3, name: 'Anuncio 3'}
  ])

})

// Aqui a gente passa a porta que vamos rodar a aplicação, por enquanto é estatica localhost:3333/users, pois estamos em desenvolvimento. Ou seja, eu falo pra ele escutar essa porta 3333, e so mando parar de escutar quando der ctrl + C e para executar node src/server.mjs
app.listen(3333)