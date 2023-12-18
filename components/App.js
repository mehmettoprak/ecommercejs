"use client"

import React, { useEffect } from 'react'
 import Header from './header'
import Footer from './footer'
import BootsrapClient from './BootsrapClient'
import { useDispatch } from 'react-redux'
import { hideLoading } from '@/redux/slices/cartSlice'


 
 
 function App({children}) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(hideLoading())
    }, [dispatch])
   return (
    <>
    <Header/>
     <main>{children}</main>
     <BootsrapClient />

    <Footer />
    </>
   )
 }
 
 export default App