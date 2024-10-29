
import { Products } from '@/app/services/apiProducts'
import ProductItem from './ProductItem'
import Skeleton from '../Skeleton';
 

const ProductList = ({products}: {products : Products[]}) => {


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {  
        products.map(item=>(
          <div key={item.id}>
            <ProductItem item={item} />
          </div>
        ))
      }
    </div>
  )
}

export default ProductList
