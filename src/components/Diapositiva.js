import React, { useState } from 'react';
import { DatosDiapos } from './DatosDiapos';
import './DiapoEstilo.css'

//Albert Salas, importamos los datos del componente DatosDiapos 

function Diapositivas({ diapositivas }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const anterior = () => {
    if(selectedIndex !== 0) {
      setSelectedIndex(index => index-1);
    } //Siempre y cuando no estemos en la posicion inicial, retrocedemos una posicion
  }
  
  const siguiente = () => {
    if(selectedIndex !== diapositivas.length - 1) {
      setSelectedIndex(index => index+1);
    } //Validar si se puede seguir recorriendo el array, en caso de si moverse una posicion
  }
  
  const restart = () => {
    setSelectedIndex(0);
  } //Para volver a la posicion inicial del array
  
  return (
      // Asignamos los eventos a los botones
    <div>
      <div id="navegacion" className="superior">
        <button data-testid="button-restart" class="boton-res" onClick={restart}>
          Restart
        </button>
        <button data-testid="button-anterior" class="boton" onClick={anterior}>
          Prev
        </button> 
        <button data-testid="button-siguiente"  class="boton" onClick={siguiente}>
          Next
        </button>
      </div>
      <div className="caja">
        <h1 data-testid="title">{DatosDiapos[selectedIndex].title}</h1>
        <p data-testid="text">{DatosDiapos[selectedIndex].text}</p>
      </div>
    </div>
  );
}

export default Diapositivas;