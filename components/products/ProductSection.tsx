'use client'
import ProductList from './ProductList'
import apiProducts from '@/app/services/apiProducts'
import React, { useEffect, useState } from 'react'
import { Products } from '@/app/services/apiProducts'
import ProductsFilterDropDown from './ProductsFilterDropDown'
import { Button } from '../ui/button'
import { useSearchParams } from 'next/navigation'


const ProductSection = () => {
  

  const [productsList, setProductsList] = useState<Products[]>([]);
  const [currentStart, setCurrentStart]=useState(0)
  const limit=5;
  const [hasMoreProducts, setHasMoreProducts] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  
  
  const getLatestProduct = (start=0) => {


    apiProducts.getLatestProduct(start, limit).then((res) => {
      if (start === 0) {
        setProductsList(res.data.data); // Remplacez complètement la liste
      } else {
        setProductsList((prevProducts) => [
          ...prevProducts,
          ...res.data.data,
        ]);
      }
  
      if (res.data.data.length < limit) {
        setHasMoreProducts(false);
      }      if(res.data.data.length < limit){
        setHasMoreProducts(false);
      }
    });
  };

  const loadMoreProducts=()=>{
    const newStart = currentStart+limit;
    setCurrentStart(newStart);
    if (selectedCategory) {
      getProductListByCategory(selectedCategory, newStart);
    } else {
      getLatestProduct(newStart);
    }
 }

  const getProductListByCategory = (category: string, start=0) => {
    apiProducts.getProductByCategory(category, start, limit).then(res => {

      setProductsList((prevProducts=[])=>[...prevProducts, ...res.data.data]);
    });
  };

  const handleCategoryChange = (category: string) => {
    setProductsList([]);
    setCurrentStart(0);
    setSelectedCategory(category)
    getProductListByCategory(category, 0);

  };
  const resetProducts = () => {
    setProductsList([]);
    setCurrentStart(0);
    setHasMoreProducts(true);
  };

  useEffect(() => {
    resetProducts();
    getLatestProduct();
   

  }, []);
  console.log(ProductList)

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
      {hasMoreProducts &&(
          <Button onClick={loadMoreProducts}>
          <p className='font-bold'>
            Plus
          </p>
        </Button>
         )}
      </div>     
    </div>
  );
};

export default ProductSection;
