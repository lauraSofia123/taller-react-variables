function Ejercicio4() {

  const productos = [
    { id: 1, nombre: "Laptop", precio: 2500, stock: 5 },
    { id: 2, nombre: "Mouse", precio: 80, stock: 0 },
    { id: 3, nombre: "Teclado", precio: 150, stock: 3 }
  ];

  return (
    <div>
      <h2>Ejercicio 4 y 5</h2>

      {productos.map((producto) => (
        <div
          key={producto.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            width: "200px"
          }}
        >
          <h3>{producto.nombre}</h3>
          <p>Precio: ${producto.precio}</p>

          <p>
            Estado:{" "}
            {producto.stock > 0 
              ? <span style={{ color: "green" }}>Disponible</span>
              : <span style={{ color: "red" }}>Agotado</span>
            }
          </p>

        </div>
      ))}

    </div>
  );
}

export default Ejercicio4;
