// Meu contrato, o que foi definido, tipagem alta
interface Ad{
  id: string;
  name: string;
  createdAt: Date;
}

function umaFuncao (ad: Ad){
  //calculo ha quantos dias foi postado
}

// Ele não deixa passar somente uma propiedade ou mais do que deveria passar, pois ja foi definido na interface
// E não pode passar o type diferente que foi definido na interface
umaFuncao({
  id: '1',
  name:'ad 01',
  createdAt: new Date(),
})