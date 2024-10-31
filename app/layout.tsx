'use client'
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";
import { ThemeProvider } from "@/components/providers/theme-ptoviders";
import { ClerkProvider } from '@clerk/nextjs'
import { CartContext, CartItem } from "./context/CartContext";
import { useState } from "react";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

//export const metadata: Metadata = {
  //title: "Boutique",
  //description: "Boutique en ligne",};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [cart, setCart]=useState<CartItem[]>([])
  return (
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider>
          <ClerkProvider>
            <CartContext.Provider value={{cart, setCart}}>
            <NavBar />
            {children}
            </CartContext.Provider>
          </ClerkProvider>  
          </ThemeProvider>
        </body>
      </html>
  );
}
