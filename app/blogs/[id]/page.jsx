'use client'
import { assets, blog_data } from '@/Assets/assets'
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
    const { id } = React.use(params);
    const [data, setData] = useState(null)
    const fetchBlogData = () => {
        for (let i = 0; i < blog_data.length; i++) {
            if (Number(id) === blog_data[i].id) {
                setData(blog_data[i])
                break

            }
        }
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
                <Image src={data.author_img} width={60} height={60} alt='blog' className='mx-auto mt-6 border border-white rounded-full' />
                <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
            </div>
        </div >
        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
            <Image src={data.image} alt='my-blog' width={1200} height={720} className='border-4 border-white ' />
            <h1 className='my-8 text-[26px] font-semibold'>简介</h1>
            <p>{data.description}</p>
            <h3 className='my-5 text-[18px] font-semibold'>第一步：自我审视和目标计划</h3>
            <p className='my-3'>在人生的漫漫长路上，每个人都会遭遇风雨与泥泞。但请坚信，那些打不倒你的，终将使你变得更强大。每一次挫折，都是命运给予的成长契机；每一滴汗水，都在浇灌成功的花朵。就像破土而出的新芽，历经黑暗与重压，终能拥抱阳光，绽放生机。无论前方有多少艰难险阻，只要怀揣梦想，保持积极进取的心态，一步一个脚印地坚定前行，你定能跨越重重山峦，抵达心中的远方。记住，你比想象中更勇敢，更有力量，成功就在你不懈努力的下一个转角处。</p>
            <h3 className='my-5 text-[18px] font-semibold'>执行力</h3>
            <p className='my-3'>代码是我们描绘未来的画笔。面对复杂难题，别退缩。每一次成功调试，都是突破，每一行代码优化，都是成长。持续敲下的字符，终会编织出属于你的辉煌程序篇章。</p>
            <h3 className='my-5 text-[18px] font-semibold'>热爱是一种力量</h3>
            <p className='my-3'>算法是我们的武器，逻辑是我们的战甲。在代码的战场，虽会遇Bug阻挡，但只要秉持钻研精神，不断学习创新，就能像攻克堡垒一样，拿下一个又一个项目，成就非凡职业之路。</p>
            <h3 className='my-5 text-[18px] font-semibold'>做好自己</h3>
            <p className='my-3'>代码是我们描绘未来的画笔。面对复杂难题，别退缩。每一次成功调试，都是突破，每一行代码优化，都是成长。持续敲下的字符，终会编织出属于你的辉煌程序篇章</p>
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