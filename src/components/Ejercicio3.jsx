function Ejercicio3() {

  function mensajeEstado(activo) {
    if (activo) {
      return <span style={{ color: "green" }}>Activo</span>;
    } else {
      return <span style={{ color: "red" }}>Inactivo</span>;
    }
  }

  return (
    <div>
      <h2>Ejercicio 3</h2>
      <p>Usuario 1: {mensajeEstado(true)}</p>
      <p>Usuario 2: {mensajeEstado(false)}</p>
    </div>
  );
}

export default Ejercicio3;
