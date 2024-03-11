import React, { useState } from 'react';

const App = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [mensajeBienvenida, setMensajeBienvenida] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEdadChange = (event) => {
    setEdad(event.target.value);
  };

  const generarMensajeBienvenida = (event) => {
    event.preventDefault(); 

    if (edad && nombre) {
      const edadNumero = parseInt(edad, 10);
      if (edadNumero >= 18) {
        setMensajeBienvenida(`Bienvenido ${nombre}, gracias por usar nuestra aplicación.`);
      } else {
        setMensajeBienvenida(`Hola ${nombre}, eres muy joven para usar esta aplicación.`);
      }
    }
  };

  return (
    <div className='formContainer'>
      <form>

      <h1>Ingrese Aquí</h1>
      <label>
        Nombre:
      </label>
        <input type="text" 
               value={nombre} 
               onChange={handleNombreChange} />
     
      <label>
        Edad:
      </label>
        <input type="number" 
               value={edad} 
               onChange={handleEdadChange} />
      
      <button onClick={generarMensajeBienvenida}>Mensaje</button>
  
      <p>{mensajeBienvenida}</p>
               
      </form>
    </div>
  );
};

export default App;
