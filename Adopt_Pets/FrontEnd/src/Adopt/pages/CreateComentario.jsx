import React, { useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2"
import moment from "moment";
import { AgregarComentario } from "../api/ApiComentario";
export const CreateComentario=()=>{

    const [comentario, setComentario] = useState("");
    const [fecha, setFecha] = useState(moment().format());

   
    const Comment= async(e)=>{
        e.preventDefault()
        const comentar = await AgregarComentario(comentario, fecha)
        if(comentar){
            Swal.fire({icon:"success", confirmButton:"ok"})
            

        }
    }
    
    

    return(
        <div>
            <div>
               <form > 
                <h2>Add Comentario</h2>
                <div className=''>
                    <label htmlFor="">Comentario</label>
                    <input type="text" placeholder="Escribe el Comentario" className=""
                      value={comentario}
                      onChange={(e) =>setComentario(e.target.value)}/>
                         
                </div>
              
                <button onClick={(e)=>Comment(e)}className="">Submit</button>
               </form>


            </div>
        </div>
    )
}