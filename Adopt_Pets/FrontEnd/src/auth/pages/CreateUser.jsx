import { useState } from 'react';
import register from '../api/ApiRegister';
import "../../assets/styles/Register.css"
import Swal from 'sweetalert2';

export const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const token = await register(name, email, password, rol)
    if (token) {
      Swal.fire({
        icon: "success",
        title: "Por fin",
        text: "Te has registrado!",
        confirmButtonText: "Ok"
      }).then((r) => {
        if (r.isConfirmed) { 
          window.location.href = "/login";
        } else {
          window.location.href = "/login";
        }
      })
    }
  };

  return (
    <>
    <div className="body">
      <div className='containerUser'>
        <h2>Crear Cuenta</h2>
        <form action="#" onSubmit={handleRegister}>
          <div className="user-details">
            <div className="input-box">
              <span className='details'>Nombre de usuario</span>
              <input
                type="text"
                placeholder='Ingrese el nombre'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-box">
              <span className='details'>Correo Electrónico</span>
              <input
                type="email"
                placeholder='Ingrese el email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box">
              <span className='details'>Contraseña</span>
              <input
                type="password"
                placeholder='Ingresa la contraseña'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-box">
              <span className='details'>Rol</span>
              <input
                type="text"
                placeholder='Ingresa tu nombre'
                required
                value={rol}
                onChange={(e) => setRol(e.target.value)}
              />
            </div>
            <div className='button'>
            <button onClick={(e) => handleRegister(e)} type="submit" className='button'>
              Registrar
            </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};