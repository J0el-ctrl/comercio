/* eslint-disable react/prop-types */
// carrito de compras articulos
import styled from "styled-components"

export const Carrito = ({carrito}) => {

 

  return (
<div>
    {
        carrito.length > 0 ? carrito.map((p,index)=>{
            return (
                <Producto key={index}>
                    <NombreProducto>
                        {p.nombre}
                    </NombreProducto>
                    cantidad :{p.cantidad}
                </Producto>
                )
            })
             : <p>Aun no has agregado productos la carrito</p>
    }
</div>
  )
}
const Producto=styled.div`
    padding:10px;
    border-bottom:1px solid ebebf3;
    font-size:14px;
`;
const NombreProducto=styled.p`
    font-weight:bold;
    font-size:16px;
    color:#000;
`;
