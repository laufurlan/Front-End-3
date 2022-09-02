import React from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import { useState } from "react";


function App() {

  const [carrito, setCarrito] = useState(0);

  function agregarItem(){
    setCarrito((cantidad) => cantidad + 1)
  }

  return (
    <div className="App">
      <Cabecera carrito={carrito}/>
      <Listado agregarItem={agregarItem}/>
    </div>
  );
}

export default App;
