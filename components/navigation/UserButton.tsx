"use client"

import React, { useState } from 'react'
import {Moon, Sun, LogOut} from "lucide-react";
import { AlignJustify } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useTheme } from 'next-themes';
import { Switch } from '../ui/switch';
  

const UserButton = ({session}: {session: boolean}) => {
  const {setTheme, theme} = useTheme();
  const [checked, setChekecked] = useState(false)
  const setSwitch = () =>{
    switch(theme){
      case "dark" : return setChekecked(true)
      case "light" : return setChekecked(false)
      case "system" : return setChekecked(false)
    }
  }
  return (

<DropdownMenu>
  <DropdownMenuTrigger>
    <AlignJustify color='purple'/>
  </DropdownMenuTrigger>
  <DropdownMenuContent className='w-64 p-6' align='end'>
    <DropdownMenuLabel>Utilisateur</DropdownMenuLabel>
    <DropdownMenuSeparator />

    <DropdownMenuItem className="py-2 font-medium cursor-pointer">
        Profile
    </DropdownMenuItem>
    <DropdownMenuItem className="py-2 font-medium cursor-pointer">
        Produits
    </DropdownMenuItem>

    {theme && (
          <DropdownMenuItem className="py-2 font-medium cursor-pointer group">
            <div className="flex items-center group" onClick={(e)=>e.stopPropagation()}>
              {theme==="light"?<Sun size={16} className="group-hover:text-yellow-600 group-hover:rotate-180 transition-all ease-in-out" />:<Moon size={16}
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

        {!session &&(
            <DropdownMenuItem  className="group py-2 font-medium cursor-pointer focus:bg-destructive/30 duration-300">       
            <LogOut size={16} className="mr-1 group-hover:scale-75 " />
            Sign Out
        </DropdownMenuItem>
        )}
        
  </DropdownMenuContent>
</DropdownMenu>

  )
}

export default UserButton
