import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar";
import { Solicitud } from "./Adopt/pages/Solicitud";
import { Adopcion } from "./Adopt/pages/Adopciones";
import {LoginPage} from "./auth/pages/LoginPage"
import { CreateUser } from "./auth/pages/CreateUser";
import { HomePage } from "./Adopt/pages/HomePage";
import {Contact} from "./Adopt/pages/Contact" 
import { Comentario } from "./Adopt/pages/Comentario";
import {CreateComentario} from "./Adopt/pages/CreateComentario"
import {userAuthenticated} from "./auth/helpers/loginHelper"

export const AppRouter = () => {
  return (
    <>
    {<Navbar />}
    <Routes>
    <Route path="/login"
        element={
          !userAuthenticated() ? (
            <LoginPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      
      
        <Route path="/"
          element={userAuthenticated() ? <HomePage /> : (<Navigate to="/login"></Navigate>)}
        />

      
      <Route path="/HomePage"
        element={
          userAuthenticated() ? (
            <HomePage />
          ) : (
            <Navigate to="/login"></Navigate>
          )
        }
      />

      <Route path="/create-user"
        element={<CreateUser></CreateUser>}
      />

      <Route path="/solicitud"
        element={
          userAuthenticated() ? (
            <Solicitud />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route path="/contact"
        element={
          userAuthenticated() ? (
            <Contact />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route path="/comentario"
        element={
          userAuthenticated() ? (
            <Comentario />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route path="/create"
        element={
          userAuthenticated() ? (
            <CreateComentario />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route path="/Adopcion"
        element={
          userAuthenticated() ? (
            <Adopcion />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      </Routes>

    </>
  );
}
