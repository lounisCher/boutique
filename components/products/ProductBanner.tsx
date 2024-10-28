import { Products } from '@/app/services/apiProducts'
import Image from 'next/image'
import React from 'react'

const ProductBanner = ({product}:{product: Products | undefined}) => {

  const imageUrl = product?.banner?.[0]?.url;
  return (
    <div>
      {imageUrl ? (
        <Image
        src={imageUrl}
        alt="product"
        width={400}
        height={400}
        className='rounded-lg shadow-md'
        />
      ): <p>Loading</p>}
    </div>
  )
}

export default ProductBanner