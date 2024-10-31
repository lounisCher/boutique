"use client"
import { Products } from "@/app/services/apiProducts";
import React, { useContext, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import SkeletonInfo from "../SkeletonInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import apiCart from "@/app/services/apiCart";
import { CartContext } from "@/app/context/CartContext";
import AddNotifications from "./AddNotifications";

const ProductInfo = ({ product }: { product: Products | undefined }) => {

  const {cart, setCart} = useContext(CartContext);
  const {user} = useUser();
  const router = useRouter();
  const [notificationVisible, setNotificationVisible] = useState(false); // État pour la notification

  const handleAddToCart =()=>{
    if(!user){
      router.push("/sign-in");
    }else{
      //logic add to cart
      const data = {
        data:{
          username: user.fullName,
          email: user.primaryEmailAddress?.emailAddress,
          products: [product?.documentId]
        }
      }
      apiCart.addToCart(data).then(res=>{
        setCart(prev=>[
          ...prev,
          {
            id:res.data.data.id,
            documentId: res.data.data.documentId,
            product,
          }
        ])
        setNotificationVisible(true); // Afficher la notification

      }).catch(error=>{
        console.log("Error", error)
      })
    }
  }

  return (
    <div>
      {product?.title ? (
        <div>
          <h1 className="text-3xl font-bold mt-5">{product?.title}</h1>
          <Badge className="mt-5">{product?.category}</Badge>
          <h2 className="text-xl mt-10">
            {product?.description[0].children[0].text}{" "}
          </h2>
          <h1 className="font-bold mt-5 text-3xl text-primary/75">
            {product?.price} DA
          </h1>

          <Button className="mt-5 flex gap-2"
          onClick={()=>handleAddToCart()}
          >
            <ShoppingCart />
            Ajouter au panier
          </Button>
        </div>
      ) : (
        <SkeletonInfo />
      )}
      <AddNotifications
        message="Produit ajouté au panier !"
        visible={notificationVisible}
        onClose={() => setNotificationVisible(false)} 
      />
    </div>
  );
};

export default ProductInfo;
