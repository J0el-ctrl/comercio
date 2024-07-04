import styled from "styled-components";
import { useState } from "react";
import { Aside, ProductosTienda } from "../components";

export const Tienda = () => {

  const productos=[
    {id:1,nombre:'producto1'},
    {id:2,nombre:'producto2'},
    {id:3,nombre:'producto3'},
    {id:4,nombre:'producto4'},
    {id:5,nombre:'producto5'}
]
const [carrito, setCarrito] = useState([]);
   const AgregarProductoAlCarritos = (idProductoAgregar,nombre) => {      
    // si el carrito no tiene elementos entonces agregamos uno
      if(carrito.length ===0){
          setCarrito([{id:idProductoAgregar,nombre:nombre,cantidad:1}]);
      }else{
        // de otra forma tenemos que revisar que el carrito no tenga ya el producto que queremos agregar.
        // si ya lo tiene entonces queremos actualizar su valor
        //si no tiene el producto entonces lo agregamos

        // para poder editar el arreglo tenemos que clonarlo
         const nuevoCarrito=[...carrito];

         //comprobamos si el carrito ya tiene el ID del producto a agregar
         const yaEstaEnCarrito=nuevoCarrito.filter((productoDeCarrito)=>{
          return productoDeCarrito.id===idProductoAgregar
          // luego de hacer la comprobacion que no tenga 0 elementos devolvera true or false y se guarda en la const
         }).length>0;

        //  si ya tiene el producto entonces lo tenemos que *ACTUALIZAR
        if(yaEstaEnCarrito){
          // para ello tenemos que buscarlo, obtener su posicion en el arreglo.
          // y en base a su posicion ya actualizamos el resto
          nuevoCarrito.forEach((elProductoDeCarrito,index)=>{
            // si los id son iguales entonces es true hacemos todo de abajo e ingreso al arreglo y busco la cantidad
            if(elProductoDeCarrito.id === idProductoAgregar){
              // acedemos al index del arreglo y al elemento que busco y quiero obtener la propiedad cantidad y la guardo 
              const cantidad = nuevoCarrito[index].cantidad;
              //accedemos al elemento y lo sobreescribimos y aumentamos la cantidad + 1
              nuevoCarrito[index]={id:idProductoAgregar,nombre:nombre,cantidad:cantidad + 1 
              }
            }
          });
          // de otra forma entonces agregamos *INSERTAR el producto al arreglo.
        }else{
          nuevoCarrito.push(
            {
              id:idProductoAgregar,
              nombre:nombre,
              cantidad:1
            }
          );
        }
        // por ultimo actualizamos el carrito en el view enviado por el state
        setCarrito(nuevoCarrito)

      }
    } 
    
  return (
    <Contenedor>
      {/* izquierda */}
      <main>
        <h1>Tienda</h1>
      <ProductosTienda 
      productos={productos}
      AgregarProductoAlCarrito={AgregarProductoAlCarritos} />
      </main>
      {/* derecha */}
      <aside>
        <Aside carrito={carrito} />
      </aside>
    </Contenedor>
  )
}


const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    /* dos columnas */
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 