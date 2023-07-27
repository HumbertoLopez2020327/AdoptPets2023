import axios from "axios";
import Swal from "sweetalert2";

const URL = "https://adopt-pets2023-humbertolopez2020327.vercel.app/api/"
export const register = async(username, email, password, rol) => {
    try{
        const response = await axios.post(`${URL}create-user`, {username, email, password, rol})
        return response;
    }catch(err){
        Swal.fire({
        icon: "error",
        title: "Algo salió mal :(",
        text: "No pudiste registrarte ",
        });
        console.log(err)
        console.log(err.response.data)
    }
}

export default register;