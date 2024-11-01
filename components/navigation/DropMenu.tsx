"use client"

import React, { useContext, useEffect, useState } from 'react'
import {Moon, Sun, ShoppingCart} from "lucide-react";
import { AlignJustify } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useTheme } from 'next-themes';
import { Switch } from '../ui/switch';
import { CartContext } from '@/app/context/CartContext';
import { useUser } from '@clerk/nextjs';
import apiCart from '@/app/services/apiCart';
import Cart from '../products/Cart';
  

const DropMenu = () => {
  const {setTheme, theme} = useTheme();
  const [checked, setChekecked] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  
  const {cart, setCart} = useContext(CartContext);
  const {user} = useUser();
  const getUserCartItems=()=>{
    apiCart.getUserCartItems(user?.primaryEmailAddress?.emailAddress).then(res=>{
      console.log(res.data.data)
      res.data.data.forEach(i=>{
        setCart((prev)=>[
          ...prev,
          {
            id:i.id,
            product: i.products[0],
            documentId: i.documentId,
          }
        ])
      })
    })
  }
  useEffect(()=>{
    if (user) getUserCartItems();
  }, [user]);

  useEffect(() => {
    if (theme === "dark") {
        setChekecked(true);
    } else {
        setChekecked(false);
    }
}, [theme]);


  return (

<DropdownMenu>
  
  <DropdownMenuTrigger disabled={isOpen}>
    <AlignJustify color='purple'/>
  </DropdownMenuTrigger>
  <DropdownMenuContent className='w-64 p-6' align='end'>
    {user && (
      <>  
      <DropdownMenuItem className="py-2 font-medium cursor-pointer" onClick={()=>setIsOpen(true)}>
         <div className='flex gap-2'>
         <ShoppingCart size={20} className='mt-1'/>
          <h2 className='text-xs text-red-800 font-bold'>({cart.length})</h2>
          </div> 
          Produits
      </DropdownMenuItem>
      </>
    )} 
    {theme && (
          <DropdownMenuItem className="py-2 font-medium cursor-pointer group">
            <div className="flex items-center group" onClick={(e)=>e.stopPropagation()}>
              {theme==="light"?<Sun size={16} className="group-hover:text-yellow-600 group-hover:rotate-180 transition-all ease-in-out" />:<Moon size={20}
              className="group-hover:text-blue-400 group-hover:rotate-180 transition-all ease-in-out" />}
                       
              <p className="dark:text-blue-400 text-secondary-foreground/75 text-yellow-600 mx-3">
                {theme[0].toUpperCase()+theme.slice(1)} Mode
              </p>
              <Switch 
              className="scale-75"
              checked={checked} onCheckedChange={(e)=>{
                setChekecked((prev)=>!prev)
                if(e) setTheme("dark")
                if(!e) setTheme("light")  

              }}/>
            </div>
          </DropdownMenuItem>
          )} 

  </DropdownMenuContent>
   {isOpen && <Cart onClose={()=>setIsOpen(false)}/>}
</DropdownMenu>

  )
}

export default DropMenu
