import React from 'react'
import { motion, AnimatePresence } from 'motion/react'

const childVarients = {
    "initial": {y: 0},
    "exit": {y: "-100%", transition: {duration: 0.7}}
}
const Loader = ({setLoading}) => {
  return (
    <>
        <motion.div className='w-full bg-transparent fixed inset-0 z-1000 h-screen flex'
        variants={{
        "initial": {},
        "exit": { transition: { duration: 10, staggerChildren: 0.1}}}}
    initial="initial"
    exit="exit"
        >
            <motion.div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2'
            exit={{opacity: 0}}
            >
        <motion.h1 className='text-5xl font-bold text-white'
        
        initial={{opacity: 0, y: "-100%"}}
        animate={{opacity: 1, y: 0}}
        transition={{type: "spring", stiffness: 120, delay: 0.5}}
        >LUCID</motion.h1>
        <div className='w-50 h-2 bg-white/20 rounded-md p-0.5'>
        <motion.div className='w-full bg-white h-1 rounded-md'
        initial={{width: 0}}
        animate={{width: "100%"}}
        transition={{duration: 3, delay: 0.5}}
        onAnimationComplete={()=> setLoading(false)}
        ></motion.div>
        </div>
        </motion.div>
        <motion.div className='bg-black w-1/5 min-h-screen'
        variants={childVarients}
        ></motion.div>
        <motion.div className='bg-black w-1/5 min-h-screen'
        variants={childVarients}
        ></motion.div>
        <motion.div className='bg-black w-1/5 min-h-screen'
        variants={childVarients}
        ></motion.div>
        <motion.div className='bg-black w-1/5 min-h-screen'
        variants={childVarients}
        ></motion.div>
        <motion.div className='bg-black w-1/5 min-h-screen'
        variants={childVarients}
        ></motion.div>

        {/* <div className='bg-black w-full max-w-[20%] min-h-screen'></div>
        <div className='bg-black w-full max-w-[20%] min-h-screen'></div>
        <div className='bg-black w-full max-w-[20%] min-h-screen'></div>
        <div className='bg-black w-full max-w-[20%] min-h-screen'></div>
        <div className='bg-black w-full max-w-[20%] min-h-screen'></div> */}

        </motion.div>
    
    </>
  )
}

export default Loader