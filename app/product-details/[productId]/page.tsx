'use client'
import apiProducts, { Products } from '@/app/services/apiProducts'
import BreadCrumb from '@/components/BreadCrumb';
import ProductBanner from '@/components/products/ProductBanner';
import ProductInfo from '@/components/products/ProductInfo';
import React, { useEffect, useState } from 'react'

interface ProductDetailsProps {
  params: Promise<{ productId: string}>;
}

const ProductDetails = ({ params }: ProductDetailsProps) => {
  const [product, setProduct] = useState<Products>();

  const fetchProduct = async () => {
    try {

      const { productId } = await params;
      
      const res = await apiProducts.getProductById(productId);
      setProduct(res.data.data)


    } catch (error) {
      console.error("Erreur lors de la récupération du produit :", error);
    }
  };

  useEffect(() => {
   

    fetchProduct();
  }, []);

  return(
      <div className='px-10 py-8 md:px-28'> 
        <BreadCrumb/>
        <div className='mt-10 flex-col flex md:flex-row gap-5'>
          <ProductBanner product={product}/>
          <ProductInfo product={product} />
        </div>
      </div>
  )
  
  
};

export default ProductDetails;
