import React from 'react'
import bginterior from "/images/bg-interior.webp"
import { motion } from 'motion/react'

const Design = () => {
  return (
    <section id='design' className='mt-20 mb-20'>
        <motion.h1 className='text-xl text-[#A67C52] font-semibold mb-5 ml-5'
        initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true, amount: 1}}
      transition={{duration: 2}}
        >Interior</motion.h1>
       <motion.div className='flex flex-col justify-start items-start'
       initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 2}}
       >
        {/* <div> */}
         <div style={{ backgroundImage: `url(${bginterior})`}} className='relative w-full h-[60vh] bg-cover bg-center'>
         </div>
         <div className='w-full h-[60vh] bg-black/30 absolute'></div>
         <h1 className='absolute right-20 mt-10 font-myfont text-3xl font-bold'>The Future of Driving</h1>
        {/* </div> */}
        
       </motion.div>
       <motion.p className='px-4 my-4 text-sm'
       initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 2}}
       >Step inside a carbin inspired by modern architecture and acoustic excellence. Featuring expensive
       glass canopies, sustainable luxury materials, and intuitive displays, every journey becomes a
       first-class experience
</motion.p>
       <div className='flex items-center p-4 justify-center w-full'>
        <motion.div className='grid grid-cols-2 gap-1 max-w-200 justify-center items-center mt-15'
        initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 2}}
        >
            <img src="/images/int1.webp" className='rounded-md max-w-70 object-cover w-full' alt="" />
        <img src="/images/int2.webp" className='rounded-md object-cover w-full max-w-70' alt="" />
        <img src="/images/bg-connectivity.webp" className='rounded-md max-w-141 object-cover col-span-2 w-full' alt="" />
        <img src="/images/int4.webp" className='rounded-md max-w-70 object-cover w-full' alt="" />
        <img src="/images/int3.webp" className='max-w-70 rounded-md object-cover w-full' alt="" />
        </motion.div>
        
       </div>
    </section>
  )
}

export default Design