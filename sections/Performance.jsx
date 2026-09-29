import { ShieldCheckIcon, Timer } from 'lucide-react'
import React from 'react'
import { FaHeartbeat } from 'react-icons/fa'
import {motion} from 'motion/react'

const Performance = () => {
  return (
    <>
    <section id='perform' className='px-4 mt-20 mb-20 flex flex-wrap md:flex-nowrap justify-center items-center gap-20'>
      <motion.div className='flex justify-start items-start flex-col gap-3'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 2}}
      >
    <h1 className='text-2xl md:text-3xl max-w-100 font-myfont font-bold'>Engineered for Effortless Performance</h1>
    <p className='max-w-90 text-sm md:text-[17px]'>
      Experience the pinnacle of electric vehicle engineering.
      By packing race-proven technology into a refined luxury package,
      the Lucid Air redefines what an EV can achieve on the road
    </p>
    <div className='flex gap-3 justify-center items-center mt-4'>
   <div className='flex flex-col justify-start items-start md:gap-1'>
   <FaHeartbeat size={21}/>
   <h1 className='font-bold text-lg lg:text-xl'>519</h1>
   <p className='text-[10px] lg:text-[12px] max-w-20'>Long Range- the farthest traveling EV in its class on a single charge</p>
   </div>
   <div className='h-37 w-0.5 bg-[#f5eddb]'></div>

   <div className='flex flex-col justify-start items-start md:gap-1'>
   <ShieldCheckIcon size={21}/>
   <h1 className='font-bold text-lg lg:text-xl'>4.9</h1>
   <p className='text-[10px] lg:text-[12px]  max-w-20'>Exceptional Efficiency - the
industry most efficient production EV powertrain</p>
   </div>
   <div className='h-37 w-0.5 bg-[#f5eddb]'></div>

   <div className='flex flex-col justify-start items-start md:gap-1'>
   <FaHeartbeat size={21}/>
   <h1 className='font-bold text-lg lg:text-xl'>1234</h1>
   <p className='text-[10px] lg:text-[12px] max-w-22'>Powerful Electric performance from
    Lucid’s own dual motor platform</p>
   </div>
   <div className='h-37 w-0.5 bg-[#f5eddb]'></div>

   <div className='flex flex-col justify-start items-start md:gap-1'>
   <Timer size={21}/>
   <h1 className='font-bold text-lg lg:text-xl'>20</h1>
   <p className='text-[10px] lg:text-[12px]  max-w-20'>Fast charging add
upto 200 miles of range in under 20 minutes</p>
   </div>
    </div>
      </motion.div>
      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 1}}
      >
        <img src="./images/bg-overview (1).webp" alt="performance" className='w-full max-w-140'/>
      </motion.div>
    </section>
    </>
  )
}

export default Performance