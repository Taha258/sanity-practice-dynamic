import fetchData from '@/sanity/fetchData'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface IProduct {
  title: string;
  image: {
    asset: {
      _ref: string;
    }
  };
  description: string;
  price: number;
  category: string;
  slug: {
    current: string;
  }
}

export default async function ProductsPage() {
  const data = await fetchData();
  
  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-3xl font-bold mb-6'>All Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {data.map((product: IProduct,index:number) => (
             console.log(product.slug),
             
          <Link href={`/product/${product.slug}`} key={index} className='border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow'>
            <div className='aspect-w-1 aspect-h-1'>
              <Image 
                src={urlFor(product.image).width(300).height(300).url()} 
                alt={product.title} 
                width={300} 
                height={300}
                className='object-cover'
              />
            </div>
            <div className='p-4'>
              <h2 className='text-xl font-semibold mb-2'>{product.title}</h2>
              <p className='text-gray-600 mb-2 line-clamp-2'>{product.description}</p>
              <p className='text-lg font-bold mb-2'>${product.price.toFixed(2)}</p>
              <p className='text-sm text-gray-500'>{product.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

