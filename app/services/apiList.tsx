import { useState } from "react";
import apiProducts, { Products } from "./apiProducts";

const [productsList, setProductsList] = useState<Products[]>();
  const [currentStart, setCurrentStart]=useState(0)
  const limit=5;
  const [hasMoreProducts, setHasMoreProducts] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  
  
  const getLatestProduct = (start=0) => {
    apiProducts.getLatestProduct(start, limit).then((res) => {
      setProductsList((prevProducts = []) => [...prevProducts, ...res.data.data]);      
      if(res.data.data.length < limit){
        setHasMoreProducts(false);
      }
      return ProductList
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