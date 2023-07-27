import React, { useEffect, useState } from 'react';
import Panel from './panel'; // Importar primero Panel
import axios from 'axios';
import '../../assets/styles/Adopcion.css';

export const Adopcion = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [tarjeta, setTarjeta] = useState([])

  useEffect(()=>{
    const obtenerMascota = async() =>{
        try {
            const response = await axios.get('https://adopt-pets2023-humbertolopez2020327.vercel.app/api/listar-pet')
            const data = response.data.pets
            setTarjeta(data)
        } catch (error) {
            console.error('Error al agregar mascota', error)
        }
    }
    obtenerMascota();
  }, [])

  const handleCardClick = () => {
    setShowPanel(true);
  };

  return (
    <div className="container">
      <div className="grid-container">
          <div className="card" onClick={handleCardClick}>
            <div className="card-body">
              <h5 className="card-title">+</h5>
            </div>
          </div>
          
          {tarjeta.length === 0 ? (
            <div className="card">
              {/* Aquí se muestra el mensaje cuando no hay mascotas */}
              <p>No hay mascotas</p>
            </div>
          ) : (
            // Aquí se muestra la lista de tarjetas si hay mascotas
            tarjeta.map((pet) => (
              <div key={pet._id} className="card" style={{ width: '18rem' }}>
                {pet.Imagen && <img src={pet.Imagen} alt="Imagen de mascota" />}
                <div className="card-body">
                  <h5 className="card-title">{pet.Raza}</h5>
                  <p className="card-text">Peso: {pet.Peso}</p>
                  <p className="card-text">Genero: {pet.Genero}</p>
                  <p className='card-text'>Estado: {pet.Estado}</p>
                  <p className='card-text'>Especie: {pet.TipodeMascota}</p>
                </div>
              </div>
            ))
          )}
      </div>
      {showPanel && <Panel setShowPanel={setShowPanel} />} {/* Usar Panel después de importarlo */}
    </div>
  );
};