import { Products } from "@/app/services/apiProducts";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import SkeletonInfo from "../SkeletonInfo";

const ProductInfo = ({ product }: { product: Products | undefined }) => {
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

          <Button className="mt-5 flex gap-2">
            <ShoppingCart />
            Ajouter au panier
          </Button>
        </div>
      ) : (
        <SkeletonInfo />
      )}
    </div>
  );
};

export default ProductInfo;
