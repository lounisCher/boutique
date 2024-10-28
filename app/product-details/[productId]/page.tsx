'use client'
import apiProducts, { ProductsList, Products } from '@/app/services/apiProducts'
import BreadCrumb from '@/components/BreadCrumb';
import ProductBanner from '@/components/products/ProductBanner';
import ProductInfo from '@/components/products/ProductInfo';
import ProductList from '@/components/products/ProductList';


import React, { useEffect, useState } from 'react'

interface ProductDetailsProps {
  params: Promise<{ productId: string}>;
}

const ProductDetails = ({ params }: ProductDetailsProps) => {

  const [product, setProduct] = useState<Products>();
  const [SimilarproductsList, setSimilarProductsList]=useState<Products[]>()

  const fetchProduct = async () => {
    try {

      const { productId } = await params;
      
      const res = await apiProducts.getProductById(productId);
      setProduct(res.data.data)
      getProductByCategory(res.data.data)

    } catch (error) {
      console.error("Erreur lors de la récupération du produit :", error);
    }

  };

  const getProductByCategory = (product:Products)=>{
    apiProducts.getProductByCategory(product.category!).then(res=>{
      setSimilarProductsList(res.data.data)
    })
  }

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

        <h2 className='mt-24 mb-6 text-xl font-bold
          bg-gradient-to-r from-primary/75 via-blue-500 to-primary bg-clip-text text-transparent sm:text-2xl '>Découvrez aussi :</h2>
        <ProductList products={SimilarproductsList || []}/>
      </div>
  )
  
  
};

export default ProductDetails;
