import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Sales from '@/components/Sales'
import Info from '@/components/Sales-Info'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header />
        <Sales />
        <Info />
        <Footer />
    </div>
  )
}

export default page