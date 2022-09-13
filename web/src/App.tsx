// Componente / propiedade

interface propsButton {
  title: String
}

function Button(propsButton: propsButton){
  return (
    <button>
      {propsButton.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title='send1'/>
      <Button title='send2'/>
      <Button title='send3'/>
    </div>
  )
}

export default App
