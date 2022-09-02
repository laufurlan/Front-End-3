import { useState } from "react"

export default function Item( {nombre, descripcion, stock, agregarItem}) {

  const [contador, setContador] = useState(stock);


  function comprar(){
    agregarItem();
    setContador((cantidad)=> cantidad - 1);
  }

  return (
    <div className='producto'>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h5>En stock: {contador > 0 ? contador : <span>Agotado</span>}</h5>
      <button disabled={contador === 0} onClick={comprar}>{contador > 0 ? 'Comprar' : 'Sin stock'}</button>
    </div>
  )
}

