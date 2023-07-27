import React from "react";


export const UpdateComentario=()=>{
    return(
        <div>
        <div>
           <form>
            <h2>Update Comentario</h2>
            <div className=''>
                <label htmlFor="">Comentario</label>
                <input type="text" placeholder="Escribe el Comentario" className=""/>

            </div>
            <div className=''>
                <label htmlFor="">Fecha</label>
                <input type="text" placeholder="Date" className=""/>
            </div>
            <div className=''>
                <label htmlFor="">Hora</label>
                <input type="text" placeholder="Hour" className=""/>

            </div>
            <button className="">Submit</button>
           </form>


        </div>
    </div>
    )
}