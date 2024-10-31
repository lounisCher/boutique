import { CartContext } from "@/app/context/CartContext";
import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Cart = ({onClose}:{onClose:()=>void}) => {
  const { cart } = useContext(CartContext);
  const handleClose = () => {
    onClose(); 
};

  return (
    <div className="h-[300px] w-[250px] bg-secondary z-10 rounded-md border shadow-sm absolute mx-10 right-5 top-8 p-5 overflow-auto text-primary/65">
      <div className="bg-primary-foreground w-full mb-5 p-2 rounded-lg">
      <Button onClick={handleClose} className="shadow-lg">
       X
      </Button> 
      </div>     
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart.map((item) => (
            <li className="flex items-center gap-4" key={item.id}>
              {item.product && (
                <>
                  <img
                    src={item.product.banner[0].url}
                    alt=""
                    className="size-16 rounded object-cover"
                    
                  />

                  <div>
                    <h3 className="text-sm text-gray-900">{item.product.title}</h3>

                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <p className="inline">Categorie: {item.product.category}</p>                       
                      </div>

                      <div>
                        <dt className="inline">Prix: {item.product.price}DA</dt>                       
                      </div>
                    </dl>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4 text-center mt-5">
        <Link
          href="/cart"
          className="block rounded border border-primary px-5 py-3 text-sm text-primary font-bold transition hover:ring-1 hover:ring-primary/75"
          onClick={handleClose}
        >
          Mes Achats
        </Link>

        <a
          href="#"
          className="inline-block text-sm text-primary/75 underline underline-offset-4 transition hover:text-primary"
        >
          Continuer mes achats
        </a>
      </div>
    </div>
  );
};

export default Cart;
