


export const Contact=()=> {

  return (
    <>
  <title>Contact</title>
  <div className="container">
    <h1>Contact Us</h1>
    <form id="customerForm" action="#" method="post">
    <label htmlFor="Nombre">Nombre:</label>
      <input type="nombre" id="nombre" name="nombre" required="" />
      <label htmlFor="email">Correo electrónico:</label>
      <input type="email" id="email" name="email" required="" />
      <label htmlFor="description">Descripción:</label>
      <textarea
        id="description"
        name="description"
        rows={4}
        required=""
        defaultValue={""}
      />
      <input type="submit" defaultValue="Enviar" />
    </form>
  </div>
</>
  )
}