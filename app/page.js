'use client'
import Header from '@/components/Header'
import React from 'react'
import BlogList from '@/components/BlogList'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify'

const page = () => {
  return (
    <>
    <ToastContainer theme='dark'/>
      <Header />
      <BlogList/>
      <Footer/>
    </>
  )
}
export default page
