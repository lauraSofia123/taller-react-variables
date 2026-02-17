function Ejercicio8() {

  const logueado = true;
  const rol = "admin"; // Cambia a "user" o prueba false en logueado

  return (
    <div>
      <h2>Ejercicio 8</h2>

      <p>
        {
          !logueado
            ? "Inicie sesión"
            : rol === "admin"
              ? "Panel Admin"
              : "Panel Usuario"
        }
      </p>

    </div>
  );
}

export default Ejercicio8;
