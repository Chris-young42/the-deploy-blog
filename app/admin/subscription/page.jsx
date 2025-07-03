'use client'
import SubTableItem from '@/components/AdminComponent/SubTableItem'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const page = () => {
  const [emails, setEmails] = useState([])
  const fetchEmails = async () => {
    const response = await axios.get('/api/email')
    setEmails(response.data.emails)
  }

  const deleteEmail = async (mongoId) => {
    const response = await axios.delete('/api/email', {
      params: {
        id: mongoId
      }
    })
    if (response.data.success) {
      toast.success(response.data.msg)
      fetchEmails()
    }else{
      toast.error('err')
    }
  }
  useEffect(() => {
    fetchEmails()
  }, [])
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>全部博客</h1>
      <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scorllbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                邮箱描述
              </th>
              <th scope='col' className='hidden sm:block px-6 py-3'>
                时间
              </th>
              <th scope='col' className='px-6 py-3'>
                活动
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => (
              <SubTableItem key={index} email={item.email} date={item.date} mongoId={item._id} deleteEmail={deleteEmail}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page