'use client'

import React from "react";
import { useRouter } from 'next/navigation'
import { Button } from "./ui/button";

const BreadCrumb = () => {

  const router = useRouter()

  return (
    <div>
     

      <nav aria-label="Breadcrumb" className="flex">
        <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-primary">
          <li className="flex items-center">
            <Button
              onClick={()=>router.push("/")}
              className="flex h-10 items-center gap-1.5 bg-secondary px-4 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>

              <span className="ms-1.5 text-xs font-medium"> Accueil </span>
            </Button>
          </li>

          
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
