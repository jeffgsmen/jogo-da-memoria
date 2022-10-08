import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useState } from 'react'

function App() {
  const [isDica, setIsDica] = useState('open')
  const [count, setCount] = useState(0)
  const [fim, setfim] = useState(false)
  const [points, setpoints] = useState(0)
  // https://pt-br.reactjs.org/docs/hooks-state.html
  
  const MySwal = withReactContent(Swal)

  const palavras = [
    {
    open:'Carro',
    hide:'Car'
    },
    {
    open:'Gato',
    hide:'Cat'
    },
    {
    open:'Vaca',
    hide:'Cow'
    },
    {
    open:'Pato',
    hide:'Duck'
    }
  ]

  const hadlerButton = () => {
    setIsDica('open');
    if (count === (palavras.length -1)) {
      setfim(true)
    } else {
      let soma = count
      setCount(soma += 1)
    }
  }

  const iniciarJogo = () => {
    setIsDica('open')
    setCount(0)
    setpoints(0)
    setfim(false)
  }

  const clickCard = () => {
    if (isDica === 'open' && !fim) {
      MySwal.fire({
        title: <strong>Como se diz: {script}, em Inglês?</strong>,
        input: 'text',
        confirmButtonText:'responder',
        inputValidator: (value) => {
          if (value) {
            setIsDica('hide')
            console.log(palavras[count]['hide'], value)
            if(palavras[count]['hide'] === value) {
              let newPoint = points + 1;
              setpoints(newPoint)
            }
          }
      }
      })
    }
  }

  const script = palavras[count][isDica]

  return (
    <div className="App">
      <h1>
          Flash Card
      </h1>
      <div className='card' onClick={ () => clickCard() }>
            {!fim ? (script) : (
                `Você fez ${points} pontos`
              )
            }
      </div>
      <br/>
      {!fim ? (<>
        <button className='btn' onClick={() => hadlerButton()}>
          próxima
        </button>
        <div>
          Points: {points}
        </div></>
      ) : <br/> }
      {fim ? (
          <button className='btn' onClick={ () => iniciarJogo() }>
              início
        </button>
        ) : <br/>
      }
      <br/>
    </div>
  );
}

export default App;
