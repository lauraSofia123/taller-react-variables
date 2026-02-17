function Perfil({ nombre, edad, ciudad }) {

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>Perfil</h3>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
      <p>
        Ciudad: {ciudad ? ciudad : "Ciudad no registrada"}
      </p>
    </div>
  );
}

export default Perfil;
