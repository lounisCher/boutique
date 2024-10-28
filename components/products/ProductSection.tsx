'use client'
import ProductList from './ProductList'
import apiProducts from '@/app/services/apiProducts'
import React, { useEffect, useState } from 'react'
import { Products } from '@/app/services/apiProducts'
import ProductsFilterDropDown from './ProductsFilterDropDown'
import { Button } from '../ui/button'

const ProductSection = () => {
  const [productsList, setProductsList] = useState<Products[]>();

  const getLatestProduct = () => {
    apiProducts.getLatestProduct().then(res => {
      console.log(res.data);
      setProductsList(res.data.data);
    });
  };

  const getProductListByCategory = (category: string) => {
    apiProducts.getProductByCategory(category).then(res => {
      setProductsList(res.data.data);
    });
  };

  const handleCategoryChange = (category: string) => {
    getProductListByCategory(category);
  };

  useEffect(() => {
    getLatestProduct();
  }, []);

  return (
    <div className='px-10 p-4 md:px-20'> 
      <div className='flex flex-col md:flex-row justify-between mb-4'>
        <h2 className='bg-gradient-to-r from-primary/75 via-blue-500 to-primary bg-clip-text text-3xl font-extrabold text-transparent sm:text-2xl mb-4'>
          Découvrez nos derniers Produits:
        </h2>
        <ProductsFilterDropDown onCategoryChange={handleCategoryChange} />
      </div> 
      <div className='flex justify-center'>
        <ProductList products={productsList || []} />
      </div>   
      <div className='flex justify-end mt-4'>
        <Button>
          <p className='font-bold'>
            Plus
          </p>
        </Button>
      </div>     
    </div>
  );
};

export default ProductSection;
