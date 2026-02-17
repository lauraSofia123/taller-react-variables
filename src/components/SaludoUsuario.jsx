function SaludoUsuario(props) {
  return (
    <div>
      <p>{props.mensaje}, {props.nombre}</p>
    </div>
  );
}

export default SaludoUsuario;
