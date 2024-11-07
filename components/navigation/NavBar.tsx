"use client";

import Link from "next/link";
import React from "react";
import { useUser, UserButton } from "@clerk/nextjs";
import DropMenu from "./DropMenu";


const NavBar = () => {
  const { user } = useUser();
   
    
  return (
    (
      <header className=" bg-primary/25 py-4 px-4 rounded-md my-4 mx-2 shadow-md">
        <nav>
          <ul className="flex items-center justify-between m-auto">
            <li>
              <Link href="/" aria-label="logo">
                <p className="text-primary font-mono font-bold text-xl hover:text-primary/85">My Boutique</p>
              </Link>
            </li>
            <li>
              <div className="flex items-center justify-between gap-5">
                {!user ? (
                  <>
                    {" "}
                    <Link href={"/sign-in"}
                    className="bg-primary/75 p-2 rounded-lg shadow-lg hover:bg-primary/85"
                    >Se connecter</Link>
                    <Link href={"/sign-up"}

                    className="bg-secondary/65 p-2 rounded-lg shadow-lg hover:bg-secondary/95"
                    >Inscription</Link >
                  </>
                ) : <UserButton/>
                }
                <DropMenu/>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    )
  );
};

export default NavBar;
