/* eslint-disable react/prop-types */
//productos que ofrece la  tienda
import styled from "styled-components";


export const ProductosTienda = ({productos,AgregarProductoAlCarrito}) => {



  return (
    <>
    <h3>Productos</h3>
    <ContenedorProductos>
        {productos.map((producto,index)=>{
            return (
                <Producto key={index}>
                    <p>{producto.nombre}</p>
                    <Boton 
                    onClick={()=>AgregarProductoAlCarrito(producto.id,producto.nombre)} 
                    >
                        Agregar al carrito
                    </Boton>
                </Producto>
            );
        })}
    </ContenedorProductos>
    </>
  )
}

const ContenedorProductos = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
`;
 
const Producto =  styled.div`
    padding: 20px;
    border: 1px solid #ebeef3;
    border-radius: 5px;
    text-align: center;
 
    p {
        margin-bottom: 10px;
        font-weight: bold;
    }
`;
 
const Boton = styled.button`
    border: none;
    background: #1c85e8;
    color: #fff;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    border-radius: 3px;
    transition: .3s ease all;
 
    &:hover {
        background: #1c6ab9;
    }
`;