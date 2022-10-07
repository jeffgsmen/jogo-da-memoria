import './App.css';
import { useState } from 'react'

function App() {
  const [isDica, setIsDica] = useState(true)
  const [count, setCount] = useState(0)
  const [fim, setfim] = useState(false)
  // https://pt-br.reactjs.org/docs/hooks-state.html

  const dica = [ 'DICA1','DICA2', 'DICA3', 'DICA4' ]
  const resposta = ['RESPOSTA1', 'RESPOSTA2', 'RESPOSTA3', 'RESPOSTA4']

  const hadlerButton = () => {
    setIsDica(true);
    if (count === (dica.length -1)) {
      setfim(true)
    } else {
      let soma = count
      setCount(soma += 1)
    }
  }

  const iniciarJogo = () => {
    setIsDica(true)
    setCount(0)
    setfim(false)
  }

  return (
    <div className="App">
      <h1>
          Flash Card
      </h1>
      <div className='card' onClick={ () => setIsDica(!isDica) }>
            {!fim ?
              (isDica ? dica[count] : resposta[count]) : (
                'Fim do jogo'
              )
            }
      </div>
      <br/>
      {!fim ? (<button className='btn' onClick={ () => hadlerButton() }>
            próxima
      </button>) : <br/> }
      {fim ? (
          <button className='btn' onClick={ () => iniciarJogo() }>
              início
        </button>
        ) : <br/>
      }
    </div>
  );
}

export default App;
