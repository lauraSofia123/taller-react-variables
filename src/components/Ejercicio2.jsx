function Ejercicio2() {

  function calcularEdad(anioNacimiento) {
    const anioActual = 2026;
    return anioActual - anioNacimiento;
  }

  return (
    <div>
      <h2>Ejercicio 2</h2>
      <p>Si naciste en 2000 tienes {calcularEdad(2000)} años</p>
      <p>Si naciste en 1995 tienes {calcularEdad(1995)} años</p>
      <p>Si naciste en 2010 tienes {calcularEdad(2010)} años</p>
    </div>
  );
}

export default Ejercicio2;
