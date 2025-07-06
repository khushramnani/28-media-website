import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1 w-full'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
