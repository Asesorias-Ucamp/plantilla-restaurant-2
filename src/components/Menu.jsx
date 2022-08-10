import React from 'react'

const arr = [
  {
    nombre: "Platillos mex",
    descripcion: "Comida típica mexicana"
  },
  {
    nombre: "Platillos ital",
    descripcion: "Comida típica italiana" 
  },
  {
    nombre: "Platillos alemanes",
    descripcion: "Comida típica alemana" 
  },
]

const Menu = ({platoDia}) => {
  return (
    <div>
      <h2 className='menu-title'>{platoDia}</h2>
      <ul className='tarjetas-menu'>
        {
          arr.map((item) => {
            return(
              <li>
                <div>
                  <h1>{item.nombre}</h1>
                  <p>{item.descripcion}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Menu