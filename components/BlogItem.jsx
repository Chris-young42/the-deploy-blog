import React from 'react'
import Image from 'next/image'
import { assets, blog_data } from '@/Assets/assets'
import Link from 'next/link'

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border-black hover:shadow-[-7px_7px_0px_#000000]'>
      <Link href={`/blogs/${id}`}>
        <Image src={image} alt='my-blog' width={400} height={400} className='border-b border-black' />
      </Link>
      <p className='ml-5 px-1 mt-5 inline-block bg-black text-white text-sm'>{category}</p>
      <div className="p-5">
        <h5 className='mb-2 text-lg font-medium tracking-tighter text-gray-900'>{title}</h5>
        <p className='mb-3 text-sm tracking-tighter text-gray-700'>{description}</p>
        <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
          阅读更多<Image src={assets.arrow} alt='my-blog' className='ml-2' width={12} />
        </Link>
      </div>
    </div>
  )
}

export default BlogItem