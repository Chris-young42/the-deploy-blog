'use client'
import { assets, blog_data } from '@/Assets/assets'
import Footer from '@/components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
    const { id } = React.use(params);
    const [data, setData] = useState(null)
    const fetchBlogData = async () => {
        const response = await axios.get('/api/blog', {
            params: {
                id: id
            }
        })
        setData(response.data)
    }
    useEffect(() => {
        fetchBlogData()
    }, [])
    return (data ? <>
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex items-center justify-between'>
                <Link href={'/'}>
                    <Image src={assets.logo} width={180} alt='my-blog' className='w-[130px] sm:w-auto' />
                </Link>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
                    开始
                    <Image src={assets.arrow} alt='my-blog' />
                </button>
            </div>
            <div className='text-center my-24'>
                <h1 className='text-2xl sm:text:5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                <Image src={data.authorImg} width={60} height={60} alt='blog' className='mx-auto mt-6 border border-white rounded-full' />
                <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
            </div>
        </div >
        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
            <Image src={data.image} alt='my-blog' width={1200} height={720} className='border-4 border-white ' />
            <div className='font-medium text-black' dangerouslySetInnerHTML={{ __html: data.description }}></div>
            <div className='my-24'>
                <p className='text-black font font-semibold my-4'>分享这篇文章在社交媒体上</p>
                <div className='flex'>
                    <Image src={assets.facebook_icon} width={50} alt='my-blog' />
                    <Image src={assets.twitter_icon} width={50} alt='my-blog' />
                    <Image src={assets.googleplus_icon} width={50} alt='my-blog' />
                </div>
            </div>
        </div>
        <Footer />
    </> : <></>
    )
}

export default page