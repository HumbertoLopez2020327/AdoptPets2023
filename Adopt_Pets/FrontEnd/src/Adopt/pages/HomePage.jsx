import '../../assets/styles/Home.css'
export const HomePage =() =>{
    const logout = ()=>{
        localStorage.removeItem("token")
        window.location.href = "/login"
    }
    return(
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet"></link>
        <div className='pati'>
         <h1>AdoptPets</h1>
        <h2>Fomentar la adopción de mascotas sin un hogar a familias mediante nuestra aplicación.
        Nuestro proposito es garantizarle a cada usuario que la adopción es la mejor opción si quiere 
        tener una mascota. Nuestra aplicación brindará las herramientras y recursos para facilitar la interacción e información.
        </h2>
        </div>
        <div className='huella'>
        <img src="./src/Adopt/components/img/Huellas.png" alt="" />
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        <div className='pati'>
        <h1>Para ti</h1>
        <h2>¿Estás buscando un compañero para compartir tus aventuras diarias? ¿Un amigo fiel que te reciba con una cola moviéndose de emoción cada vez que llegas a casa? ¡No busques más! Aquí en nuestra página de adopción, tenemos una amplia variedad de perros, cada uno con su propia personalidad y encanto único.
        Nuestro equipo está dedicado a asegurarse de que cada perro encuentre el hogar perfecto. Realizamos un proceso de adopción cuidadoso para garantizar que tanto tú como el perro se complementen y formen un lazo especial que durará toda la vida.
        ¡Ven y descubre el amor incondicional que solo un perro puede brindar! ¡Adopta hoy y cambia dos vidas para siempre!</h2>
        </div>
        <br />
        <div className='peludos'>
        <img src="./src/Adopt/components/img/peludo.jpeg" alt="" />
        </div>
        <br /><br />
        <div className='present'>
        <h2>A continutación veras unas fotografias de algunos de nuestros pelodos rescatados y otros que encontrarón una famila</h2>
        </div>
        <div className='principal'>
            <div className='imge'>
                <img src="./src/Adopt/components/img/P1.jpeg" alt="" />
                <div className='text'>
                    <p>Ella es Pelusa fue rescatada y ahora tiene familia</p>
                </div>
            </div>
        </div>
        <div className='principal'>
            <div className='imge'>
                <img src="./src/Adopt/components/img/P2.jpeg" alt="" />
                <div className='text'>
                    <p>El es canela el busca de una Familia</p>
                </div>
            </div>
        </div>
        <div className='principal'>
            <div className='imge'>
                <img src="./src/Adopt/components/img/P3.jpg" alt="" />
                <div className='text'>
                    <p>Ellos son dos hermanos que los adoptaron juntos</p>
                </div>
            </div>
        </div>
        <div className='principal'>
            <div className='imge'>
                <img src="./src/Adopt/components/img/P4.jpg" alt="" />
                <div className='text'>
                    <p>El es Sherman y busca una familia</p>
                </div>
            </div>
        </div>
        <br /><br /> <br />
        <div className='principal'>
            <div className='imge'>
                <img src="./src/Adopt/components/img/P5.jpg" alt="" />
                <div className='text'>
                    <p>Lo rescatamos de una familia que no lo queria</p>
                </div>
            </div>
        </div>
        <div className='principal'>
            <div className='imge'>
                <img src="./src/Adopt/components/img/P6.jpg" alt="" />
                <div className='text'>
                    <p>El es un peludo que estaba perdido</p>
                </div>
            </div>
        </div>
        <div className='principal'>
            <div className='imge'>
                <img src="./src/Adopt/components/img/P7.jpg" alt="" />
                <div className='text'>
                    <p>El fue adoptado por la P.N.C</p>
                </div>
            </div>
        </div>
        <div className='principal'>
            <div className='imge'>
                <img src="./src/Adopt/components/img/P8.jpg" alt="" />
                <div className='text'>
                    <p>Ahora son más felices que nunca con su nueva familia</p>
                </div>
            </div>
        </div>
        <div className='principal'>
            <div className='imge'>
                <img src="./src/Adopt/components/img/P9.jpg" alt="" />
                <div className='text'>
                    <p>En busca de una gran familia que lo ame</p>
                </div>
            </div>
        </div>
        <div className='principal'>
            <div className='imge'>
                <img src="./src/Adopt/components/img/P10.jpeg" alt="" />
                <div className='text'>
                    <p>Feliz en su nuevo hogar</p>
                </div>
            </div>
        </div>
        <div className='principal'>
            <div className='imge'>
                <img src="" alt="" />
                <div className='text'>
                    <p>En peludo extrovertido que es feliz</p>
                </div>
            </div>
        </div>
        </>
    )
}