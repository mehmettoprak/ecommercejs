"use client"


 import Header from './header'
import Footer from './footer'
import BootsrapClient from './BootsrapClient'



 
 
 function App({children}) {

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