import {useState} from 'react'

import './App.css'
import Saudacao from './components/Saldacao';
import YourName from './components/YourName';

function App() {
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>StateLift</h1>
      <YourName setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  )
}

export default App;
