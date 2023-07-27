import axios from "axios"
const URL = "https://adopt-pets2023-humbertolopez2020327.vercel.app/api/"
export const AgregarPet = async(Raza, Peso, Genero, Estado, TipodeMascota, Imagen)=>{
    try {
        const response = await axios.post(`${URL}agregar-pet`, {Raza, Peso, Genero, Estado, TipodeMascota, Imagen})
        return response;
    } catch (error) {
            console.log(error);
    }
}