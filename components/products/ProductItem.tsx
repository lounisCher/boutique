import { Products } from '@/app/services/apiProducts'
import Image from 'next/image'
import React from 'react'
import { Badge } from '../ui/badge'
import { Laptop, Smartphone, Gamepad2, Headphones } from 'lucide-react';
import Link from 'next/link';
 
const ProductItem = ({item}: {item:Products}) => {
    
 

 

  return (
    <div className='rounded-lg shadow-lg w-fit p-1 hover:border hover:cursor-pointer  border-primary/75 hover:shadow-xl h-80 bg-secondary'>

        

         {item.banner.map((img) => (
            <Link href={`/product-details/${item.documentId}`} key={img.id}>
              <Image
                src={img.url} 
                alt={img.name || 'Product image'}
                width={400}
                height={400}
                className='h-[170px] object-cover'
              />
            </Link>    
            ))}
            <div className='flex justify-between'>

                <h2 className='text-xl font-bold p-2 text-black line-clamp-2'>{item.title}</h2>
                <Badge variant={'secondary'}className='w-fit h-fit m-4 flex gap-3'>
                    <p className='text-xs '>{item.category}</p>
                    {item.category === "PC"?<Laptop size={14}/>: item.category==="PHONE"?<Smartphone size={14}/>: item.category==="Console"? <Gamepad2 size={14}/>: <Headphones size={14}/>}
                </Badge>                
            </div>
            <Badge className='m-4'>
                {item.price} DA
            </Badge>
    </div>
  )
}

export default ProductItem
