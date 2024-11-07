"use client";

import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import apiCart from "../services/apiCart";
 import Image from "next/image";
import { Button } from "@/components/ui/button";
import toast, {Toaster} from 'react-hot-toast';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [disable, setDisable]=useState(false);

  const sentEmail = async () => {
    try {
      setDisable(true);
      const res = await fetch("/api/send-email", {
        method: "POST",
      });
      if(res.ok){
        toast.success('Email sent Successfully');
        console.log("Email sent Successfully!");
        setDisable(false);
      }else{
        console.log("Failed to send email:", await res.json());
      }
    } catch (error) {
        toast.error("Email didn't sent, available in dev mode only")
        setDisable(false);
        console.error("Error sending email:", error);
    }
  };

  const getTotalAmount = () => {
    let total = 0;
    cart.forEach((i) => {
      total = total + Number(i.product?.price);
    });
    return total;
  };
  const deleteCartItemFromList = (id: string) => {
    apiCart
      .deleteCartItem(id)
      .then((res) => {
        console.log(res);
        setCart((prev) => prev.filter((i) => i.documentId !== id));
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-primary sm:text-3xl">
              Mes Produits
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {cart.map(
                (item) =>
                  item.product && (
                    <li className="flex items-center gap-4" key={item.id}>
                      <Image
                        src={item.product.banner[0].url}
                        alt=""
                        className="rounded object-cover"
                        width={46}
                        height={46}
                      />

                      <div>
                        <h3 className="text-xl font-bold">
                          {item.product.title}
                        </h3>

                        <dl className="mt-0.5 space-y-px text-[10px] text-primary/75 text-md">
                          <div>
                            <p className="inline">
                              Categories: {item.product.category}
                            </p>
                          </div>
                        </dl>
                      </div>

                      <div className="flex flex-1 items-center justify-end gap-2">
                        <div>
                          <p className="inline font-bold text-primary/65">
                            Prix: {item.product.price}DA
                          </p>
                        </div>

                        <button
                          className="text-gray-600 transition hover:text-red-600"
                          onClick={() =>
                            deleteCartItemFromList(item.documentId)
                          }
                        >
                          <span className="sr-only">Remove item</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>
                  )
              )}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <div className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between !text-base font-medium">
                    <p className="font-bold text-xl">Total</p>
                    <p className="font-bold text-primary text-xl">
                      {getTotalAmount()}DA
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    disabled={disable}
                    variant={"secondary"}
                    className="hover:bg-primary hover:text-white"
                    onClick={() => {
                      sentEmail();
                    }}
                  >
                    Verifier
                  </Button>
                </div>
              </div>
            </div>
            <h2 className=" font-bold text-xl text-primary/35 ">
              Note: Tous vos items vous seront via email
            </h2>
          </div>
        </div>
      </div>
    <Toaster/>
    </section>
  );
};

export default Cart;
