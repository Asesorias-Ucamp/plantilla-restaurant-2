import React, {useState} from 'react'

const Registro = () => {

  const [registro, setRegistro] = useState('')
  
  return (
    <div>
      <h2>
        Para acceder a nuestro newsletter suscribete!
      </h2>
      <form action="">
        <input type="text" value={registro} onChange={(e) => setRegistro(e.target.value)}/>
      </form>
      <p>{registro}</p>
    </div>
  )
}

export default Registro