import axios from "axios";
import Swal from "sweetalert2";
import { Comentario } from "../pages/Comentario";

const URL = "http://localhost:3000/api/"

export const AgregarComentario = async(comentario, fecha)=>{
    try {
         const response = await axios.post(`${URL}comentarios`, {comentario, fecha})
         return response;
    } catch (error) {
        console.log(error);
    }
}
