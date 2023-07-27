import React, { useState } from 'react';
import '../../assets/styles/Adopcion.css'
import {AgregarPet} from "../api/mascotaApi"
import axios from 'axios'

const Panel = ({ setShowPanel }) => {
  const [raza, setRaza] = useState('');
  const [peso, setPeso] = useState('');
  const [genero, setGenero] = useState('');
  const [estado, setEstado] = useState('');
  const [tipo, setTipo] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleClosePanel = () => {
    setShowPanel(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagen(file);
  };

  /*const agregarMascota = async(e) => {
    e.preventDefault();
    const agregado = await AgregarPet(raza, peso, genero, estado, tipo, imagen)
    if (agregado) {
        console.log("añadido exitosamente");
    }
  };*/
  const agregarMascota = async (e) => {
    const URL = "https://adopt-pets2023-humbertolopez2020327.vercel.app/api"
    e.preventDefault();
    const formData = new FormData(); // Crea un objeto FormData para enviar los datos al backend
  
    // Agrega los datos del formulario al FormData
    formData.append("Raza", raza);
    formData.append("Peso", peso);
    formData.append("Genero", genero);
    formData.append("Estado", estado);
    formData.append("TipodeMascota", tipo);
  
    // Agrega el archivo de imagen al FormData (debes asegurarte de que 'imagen' tenga el valor correcto)
    formData.append("Imagen", imagen);
  
    try {
      // Envía la solicitud POST al backend con el FormData que contiene los datos y la imagen
      const response = await axios.post(`${URL}agregar-pet`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Especifica el encabezado correcto para FormData
        },
      });
  
      if (response.status === 200) {
        console.log("añadido exitosamente");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="panel-overlay">
      <div className="panel">
        <div className="panel-header">
          <h3>Panel en el centro de la pantalla</h3>
        </div>
        <div className="panel-content">
          {/* Contenido del panel */}
          <form >
            <label>
              Raza:
              <input type="text" value={raza} onChange={(e) => setRaza(e.target.value)} />
            </label>
            <br />
            <label>
              Peso:
              <input type="text" value={peso} onChange={(e) => setPeso(e.target.value)} />
            </label>
            <br />
            <label>
              Género:
              <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} />
            </label>
            <br />
            <label>
              Estado:
              <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} />
            </label>
            <br />
            <label>
              Tipo:
              <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} />
            </label>
            <br />
            <label>
              Subir imagen:
              <input type="file" onChange={handleImageChange} />
            </label>
            <br />
            <button type="submit" onClick={(e) => agregarMascota(e)} >Enviar</button>
          </form>
        </div>
        <div className="panel-footer">
          <button onClick={handleClosePanel}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Panel;