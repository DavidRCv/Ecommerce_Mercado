import { RouterProvider } from "react-router";
import { CartProvider } from "./app/context/CartContext";
import { router } from "./app/routes";


export default function App(){
  return (
    <CartProvider>
        <RouterProvider router={router}/>
    </CartProvider>
  )
}
