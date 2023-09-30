import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const containerStyle = {
    backgroundColor: 'lavender', // Cambia el color de fondo a morado claro
    padding: '20px', // Añade un espacio en el interior del contenedor
    borderRadius: '8px', // Agrega bordes redondeados al contenedor
  };

  const buttonStyle = {
    margin: '5px', // Agrega un margen entre los botones
    border: 'none', // Elimina los bordes de los botones
    borderRadius: '4px', // Agrega bordes redondeados a los botones
    padding: '10px 15px', // Ajusta el espacio interno de los botones
    cursor: 'pointer', // Cambia el cursor al pasar sobre los botones
  };

  const buttonIncrementStyle = {
    ...buttonStyle,
    backgroundColor: 'purple', // Cambia el color de fondo del botón "Incrementar" a morado claro
    color: 'white', // Cambia el color del texto a blanco
  };

  const buttonDecrementStyle = {
    ...buttonStyle,
    backgroundColor: 'red', // Cambia el color de fondo del botón "Decrementar" a rojo
    color: 'white', // Cambia el color del texto a blanco
  };

  return (
    <div style={containerStyle}>
      <h2>Contador: {count}</h2>
      <button onClick={increment} style={buttonIncrementStyle}>Incrementar</button>
      <button onClick={decrement} style={buttonDecrementStyle}>Decrementar</button>
    </div>
  );
};

export default Counter;
