import axios from "axios"
const URL = "http://localhost:2099/api/"
export const AgregarPet = async(Raza, Peso, Genero, Estado, TipodeMascota, Imagen)=>{
    try {
        const response = await axios.post(`${URL}agregar-pet`, {Raza, Peso, Genero, Estado, TipodeMascota, Imagen})
        return response;
    } catch (error) {
            console.log(error);
    }
}