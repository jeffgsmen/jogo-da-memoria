import { Link } from "react-router-dom";
import { useState } from 'react'

function Login() {
    const [nome, setnome] = useState('')

    const handleTextChange = (e) => {
        setnome(e)
    }

    return (
      <div className="App">
        <h1> 
            Login
        </h1>
        <form>
            <label>
                Digite seu nome:
                <br/>
                <br/>
                <input
                    value={nome}
                    onChange={(e) => handleTextChange(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <Link to='/flashCard' state={nome}>
                <button className='btn'>
                    Jogar
                </button>
            </Link>
        </form>
      </div>
    );
  }
  
  export default Login;
  