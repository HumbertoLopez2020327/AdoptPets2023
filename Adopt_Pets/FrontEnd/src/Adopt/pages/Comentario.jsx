import { useState, useEffect } from "react";
import React from "react";
import {Link} from "react-router-dom";
import '../../assets/styles/Comentario.css'
import axios from "axios";


export const Comentario=()=>{
       const[comentarios, setComentarios] = useState([])

useEffect(()=>{
      const ObtenerComentario=async()=>{
        try {
          const response = await axios.get("http://localhost:3000/api/comentarios")
          const data = response.data.comment 
          setComentarios(data)
        } catch (error) {
          console.error("Error al Listar comentarios", error)
        }

      }
      ObtenerComentario()

},[])


    return (

      <div className="container">
  <Link to="/create" className="add-button">Add+</Link>
  <div className="row justify-content-center">
    <div className="col-md-6">
      <h1>Comentarios</h1>
      {comentarios.length === 0 ? (
        <p>No se han realizado comentarios aún</p>
      ) : (
        <ul className="list-group">
          {comentarios.map((comment) => (
            <li key={comment._id} className="list-group-item comentario-box">
              {/* Mostrar detalles de la transacción */}
              Comentario: {comment.comentario}, Fecha: {comment.fecha}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
</div>

            
             
    )
}
 