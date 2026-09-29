import React from 'react'
import offer3 from '/images/lucid-motors-lucid-gravity-gt-s-2027-mobile_2x.webp'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'

const Tech = () => {
  return (
    <section id='tech' className='flex justify-center items-center flex-wrap px-4 gap-6 mt-10'>
        <motion.img src={offer3} alt="" className='max-w-150 w-full'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 2}}
        ></motion.img>
        <motion.div className='flex flex-col'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 2}}
        >
            <h1 className='text-3xl font-myfont font-bold'>Engineered from the Atom Up</h1>
            <p className='max-w-100'>Our revolutionary Lucid Electric Powertrain (LED) and the propietary
                Wunderbox charging system are seemlessly intergrated, delivering industry-leading efficieny,
                power density, and charging speeds. Experience the future of EV architecture
            </p>
           <div className='text-[#A67C52] font-semibold underline flex gap-1'><p>Explore Powertrain Tech</p><ArrowUpRight /></div>
           </motion.div> 
    </section>
  )
}

export default Tech