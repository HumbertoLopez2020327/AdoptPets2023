import "../../assets/styles/Solicitud.css"

export const Solicitud=() =>{
  
  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AdoptPets</title>
  <link rel="stylesheet" href="styles.css" />
  <h1>AdoptPets</h1>
  <form action="/enviar_solicitud" method="POST">
    <fieldset>
      <legend>Información Personal</legend>
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" required="" />
    </fieldset>
    <fieldset>
      <legend>Información sobre su Hogar</legend>
      <label htmlFor="tipo_vivienda">Tipo de Vivienda:</label>
      <select id="tipo_vivienda" name="tipo_vivienda" required="">
        <option value="casa">Casa</option>
        <option value="apartamento">Apartamento</option>
        <option value="finca">Finca</option>
        <option value="otro">Otro</option>
      </select>
      <label htmlFor="tamanio_vivienda">Tamaño de la Vivienda (m²):</label>
      <input
        type="number"
        id="tamanio_vivienda"
        name="tamanio_vivienda"
        required=""
      />
      <label htmlFor="espacio_exterior">¿Tiene Espacio Exterior?</label>
      <input
        type="radio"
        id="espacio_exterior_si"
        name="espacio_exterior"
        defaultValue="si"
        required=""
      />
      <label htmlFor="espacio_exterior_si">Sí</label>
      <input
        type="radio"
        id="espacio_exterior_no"
        name="espacio_exterior"
        defaultValue="no"
        required=""
      />
      <label htmlFor="espacio_exterior_no">No</label>
    </fieldset>
    <fieldset>
      <legend>Estilo de Vida</legend>
      <label htmlFor="horario_trabajo">Horario de Trabajo:</label>
      <input
        type="text"
        id="horario_trabajo"
        name="horario_trabajo"
        required=""
      />
      <label htmlFor="tiempo_mascota">
        Tiempo que Puede Dedicar a la Mascota (horas al día):
      </label>
      <input
        type="number"
        id="tiempo_mascota"
        name="tiempo_mascota"
        required=""
      />
      <label htmlFor="actividad_exterior">Actividades al Aire Libre:</label>
      <textarea
        id="actividad_exterior"
        name="actividad_exterior"
        required=""
        defaultValue={""}
      />
    </fieldset>
    <fieldset>
      <legend>Experiencia con Mascotas</legend>
      <label htmlFor="experiencia_mascotas">
        Experiencia con Otras Mascotas:
      </label>
      <textarea
        id="experiencia_mascotas"
        name="experiencia_mascotas"
        required=""
        defaultValue={""}
      />
      <label htmlFor="motivo_adopcion">Motivo para Adoptar un Perro:</label>
      <textarea
        id="motivo_adopcion"
        name="motivo_adopcion"
        required=""
        defaultValue={""}
      />
    </fieldset>
    <button type="submit">Enviar Solicitud</button>
  </form>
</>

  )
}


