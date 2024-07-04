import { Route, Routes } from "react-router-dom"
import { Home,Tienda,Blog, Error404 } from "../pages/"

export const Myroutes = () => {
  
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/tienda" element={<Tienda/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="*" element={<Error404/>} />
        </Routes>
    </>
  )
}
