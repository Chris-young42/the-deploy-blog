import { blog_data } from '@/Assets/assets'
import React from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {
    return (
        <div>
            <div className='flex justify-center gap-6 my-10'>
                <button className='bg-black text-white py-1 px-4 rounded-sm'>all</button>
                <button>技术栈</button>
                <button>开始</button>
                <button>生活</button>
            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
{blog_data.map((item)=>{
    return <BlogItem key={item.id} title={item.title} description={item.description} category={item.category} image={item.image} />
})}
            </div>
        </div>
    )
}

export default BlogList