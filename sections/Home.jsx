import React from 'react'
import { motion, AnimatePresence } from 'motion/react'

const childvarient = {
    "hidden": {opacity: 0, y: 50},
    "visible": {opacity: 1, y: 0},
}
const Home = () => {
  return (
    <>
    <motion.div className='px-4 relative z-10 flex flex-col justify-center items-center w-full h-screen text-white'
    // variants={{"hidden": }}
    initial={{opacity: 0, y: 50}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
    transition={{duration: 0.5, stiffness: 50, delay: 5}}
    >
    <p className='text-7xl text-center md:text-8xl lg:text-9xl font-myfont'>LUCID AIR</p>
    <p className="font-myfont text-center max-w-150 text-sm">LUXURY & REIMAGINED. An electric sedan built without compromise, delivering effortless
performance, industry-leading range, and a sanctuary of a cabin</p>
<div className='flex justify-center items-center gap-7 mt-6'>
<button className='p-2 text-black text-xs md:text-[16px] font-semibold rounded-md bg-white'>Explore Lucid Air</button>
<button className='p-2 text-black text-xs md:text-[16px] font-semibold rounded-md bg-white'>Book a test drive</button>
</div>
    </motion.div>
    </>
  )
}

export default Home