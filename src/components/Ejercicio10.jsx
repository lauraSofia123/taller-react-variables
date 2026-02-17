import TarjetaUsuario from "./TarjetaUsuario";

function Ejercicio10() {

  const usuarios = [
    { id: 1, nombre: "Laura", edad: 22, activo: true },
    { id: 2, nombre: "", edad: 17, activo: true },
    { id: 3, nombre: "Carlos", edad: 30, activo: false }
  ];

  function puedeVerDetalle(usuario) {
    return usuario.activo && usuario.edad >= 18;
  }

  return (
    <div>
      <h2>Ejercicio 10</h2>

      {usuarios.map((usuario) => (
        <TarjetaUsuario
          key={usuario.id}
          nombre={usuario.nombre}
          edad={usuario.edad}
          activo={usuario.activo}
          puedeVer={puedeVerDetalle(usuario)}
        />
      ))}

    </div>
  );
}

export default Ejercicio10;
