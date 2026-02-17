function Ejercicio9() {

  const notificaciones = [
    "Nuevo mensaje recibido",
    "Tu pedido fue enviado",
    "Actualización disponible"
  ];

  const mostrarNotificaciones = true;

  return (
    <div>
      <h2>Ejercicio 9</h2>

      {
        mostrarNotificaciones && notificaciones.length > 0
          ? (
            <ul>
              {notificaciones.map((noti, index) => (
                <li key={index}>{noti}</li>
              ))}
            </ul>
          )
          : <p>No hay notificaciones</p>
      }

    </div>
  );
}

export default Ejercicio9;
