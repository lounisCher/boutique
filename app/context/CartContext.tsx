import { createContext, Dispatch, SetStateAction } from "react";
import { Products } from "../services/apiProducts";

//zebiii

interface ProductCart{
  data: Products
}

export interface CartItem {
    id: number | undefined;
    documentId: string;
    product:Products | undefined;   
  }
  interface CartContextType {
    cart: CartItem[];
    setCart: Dispatch<SetStateAction<CartItem[]>>;
  }  
  


export const CartContext=createContext<CartContextType>({
    cart: [],
    setCart: () => {},
});