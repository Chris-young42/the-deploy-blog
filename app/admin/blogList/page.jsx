'use client'
import BlogTableItem from '@/components/AdminComponent/BlogTableItem'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

    const [blogs, setBlogs] = useState([])
    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog')
        setBlogs(response.data.blogs)
    }
    const deleteBlog = async (mongoId) => {
        const response = await axios.delete('/api/blog', {
            params: {
                id: mongoId
            }
        })
        toast.success(response.data.msg)
        fetchBlogs()
    }
    useEffect(() => {
        fetchBlogs()
    }, [])
    return (
        <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
            <h1>全部博客</h1>
            <div className='relative h-[80vh] max-w-[850px] overflow-auto mt-4 border border-gray-400 scrollbar-hide'>
                <table className='w-full text-sm text-gray-500'>
                    <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50'>
                        <tr>
                            <th scope='col' className='hidden sm:block px-6 py-3'>
                                用户名
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                博客标题
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                日期
                            </th>
                            <th scope='col' className='px-2 py-3'>
                                活动
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((item, index) => (
                            <BlogTableItem key={index} authorImg={item.authorImg} title={item.title} author={item.author} mongoId={item._id} date={item.date} deleteBlog={deleteBlog}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default page