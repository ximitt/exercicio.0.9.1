import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Personagens = (props) => {
  const personagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
  ];

  const personagensFiltrados = personagens.filter(personagem =>
    personagem.includes(props.familia)
  );

  return (
    <div>
      <h3>Personagens de Resident Evil ({props.familia})</h3>
      <ul>
        {personagensFiltrados.map(personagem => (
          <li key={personagem}>{personagem}</li>
        ))}
      </ul>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Personagens familia= "Redfield" />
    </div>
  );
}

export default App;
