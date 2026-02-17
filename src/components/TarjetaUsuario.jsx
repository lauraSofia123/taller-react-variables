function TarjetaUsuario({ nombre, edad, activo, puedeVer }) {

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      
      <h3>{nombre ? nombre : "Nombre no disponible"}</h3>
      <p>Edad: {edad}</p>
      <p>Estado: {activo ? "Activo" : "Inactivo"}</p>

      {puedeVer && <button>Ver detalle</button>}

    </div>
  );
}

export default TarjetaUsuario;
