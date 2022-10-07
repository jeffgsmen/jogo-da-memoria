import './App.css';
import { useState } from 'react'

function App() {
  const [isPergunta, setIsPergunta] = useState(true)
  const [count, setCount] = useState(0)
  const [fim, setfim] = useState(false)

  const perguntas = [ 'exPergunta1','exPergunta2' ]
  const resposta = ['exResposta1', 'exResposta2']
  const hadlerButton = () => {
    setIsPergunta(true);
    if (count === (perguntas.length -1)) {
      setfim(true)
    } else {
      let soma = count
      setCount(soma += 1)
    }
  }

  const iniciarJogo = () => {
    setIsPergunta(true)
    setCount(0)
    setfim(false)
  }

  return (
    <div className="App">
      <h1>
          Flash Card
      </h1>
      <div onClick={ () => setIsPergunta(!isPergunta) }>
            {!fim ?
              (isPergunta ? perguntas[count] : resposta[count]) : (
                'Fim do jogo'
              )
            }
      </div>
      <br/>
      {!fim ? (<button onClick={ () => hadlerButton() }>
            próxima
      </button>) : <br/> }
      {fim ? (
          <button onClick={ () => iniciarJogo() }>
              JOGAR NOVAMENTE
        </button>
        ) : <br/>
      }
    </div>
  );
}

export default App;
