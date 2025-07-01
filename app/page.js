'use client'
import Header from '@/components/Header'
import React from 'react'
import BlogList from '@/components/BlogList'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
      <Header />
      <BlogList/>
      <Footer/>
    </>
  )
}
export default page
