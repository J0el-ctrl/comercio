/* eslint-disable react/prop-types */
// lado derecho
import { Carrito } from "./Carrito"

export const Aside = ({carrito}) => {
  return (
    <div>
      <h1>Carrito</h1>
      <Carrito carrito={carrito} />
    </div>
  )
}
