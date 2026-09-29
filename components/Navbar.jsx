import { Menu, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const childvarients = {
     "hidden": {opacity: 0, x: "-100%"},
    "animate": {opacity: 1, x: 0,
        transition: {duration: 0.3}
    },
    "exit": {opacity: 0, x: "-100%"}
}
const Navbar = ({hide}) => {
    const [menuOpen, setMenuOpen] = useState(false)
    useEffect(()=> {
    if (menuOpen) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
    }, [menuOpen])
  return (
    <>
    <motion.header className={'fixed md:bg-transparent left-0 right-0 z-100 md:relative flex justify-between items-center px-7 md:bg-linear-to-b md:from-1% md:from-black/70 md:to-transparent'}
    animate={{opacity: hide ? 0 : 1, y: hide ? "-100%" : "0%"}}
    transition={{duration: 0.3, delay: 0.2}}
    >
        <div><img src="/images/1001079101-removebg-preview.webp" alt="" className='w-23'/></div>
        <nav className='hidden md:flex gap-15 justify-center items-center text-[13px] text-white font-semibold'>
            <a href="/">Overview</a>
            <a href="#perform">Performance</a>
            <a href="#design">Design</a>
            <a href="#product">Products</a>
            <a href="#tech">Technology</a>
        </nav>
        <Menu size={36} className=' text-black rounded-md bg-[#f5eddb] md:hidden' onClick={() => setMenuOpen(true)}/>
    </motion.header>
    <div className='md:hidden'>
        <AnimatePresence>
           {menuOpen && <motion.div className='bg-[#F5F1E8] w-full h-screen fixed z-1000 top-0 flex  items-center'
    initial={{opacity: 0, y: "-100%"}}
    animate={{opacity: 1, y: 0}}
    transition={{type: "spring", stiffness: 100, damping: 20, delay: 0.2
    }}
    exit={{opacity: 0, y: "-100%"}}
    >
        <X className='text-black absolute top-5 right-5' onClick={()=> setMenuOpen(false)}/>
           <motion.nav className='font-myfont flex flex-col gap-10 ml-6 justify-center items-start text-3xl text-black font-extrabold'
           variants={{
            "hidden": {opacity: 0, x: "-100%"},
            "animate": {opacity: 1, x: 0,
                transition: {duration: 0.3, staggerChildren: 0.2, delayChildren: 0.6, delay: 0.4}
            },
            "exit": {opacity: 0, x: "-100%"}
           }}
           initial="hidden"
           whileInView="animate"
           exit="exit"
           >
            <div className='flex flex-col'>
                <motion.a onClick={()=> setMenuOpen(false)} href="/" variants={childvarients}>Overview</motion.a>
                <div className='w-70 p-0 mt-7 h-0.5 bg-black/50'></div>
            </div>
            <div className='flex flex-col'>
                <motion.a onClick={()=> setMenuOpen(false)} href="#perform" variants={childvarients}>Performance</motion.a>
                <div className='w-70 p-0 mt-7 h-0.5 bg-black/50'></div>
            </div>
            <div className='flex flex-col'>
                <motion.a onClick={()=> setMenuOpen(false)} href="#design" variants={childvarients}>Design</motion.a>
                <div className='w-70 p-0 mt-7 h-0.5 bg-black/50'></div>
            </div>
            <div className='flex flex-col'>
                <motion.a href="#product" onClick={()=> setMenuOpen(false)} variants={childvarients}>Products</motion.a>
                <div className='w-70 p-0 mt-7 h-0.5 bg-black/50'></div>
            </div>
            <div className='flex flex-col'>
                <motion.a onClick={()=> setMenuOpen(false)} href="#tech" variants={childvarients}>Technology</motion.a>
                <div className='w-70 p-0 mt-7 h-0.5 bg-black/50'></div>
            </div>
        </motion.nav> 
        </motion.div>}
        </AnimatePresence>
    </div>
    </>
  )
}

export default Navbar