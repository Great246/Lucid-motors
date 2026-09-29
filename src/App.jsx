import { useState, useEffect } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Home from '../sections/Home'
import Loader from '../components/loader'
import Performance from '../sections/Performance'
import Design from '../sections/Design'
import Tech from '../sections/Tech'
import Footer from '../components/Footer'
import { AnimatePresence, useMotionValueEvent, useScroll, useTransform, motion } from 'motion/react'
import Products from '../sections/Products'

function App() {
  const [ loading, setLoading ] = useState(true)
  const [hide, setHide] = useState(false)
  const { scrollYProgress, scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change",
    (latest)=>
      { const previous = scrollY.getPrevious()
      // console.log(latest, previous)
      if (latest > 200 && latest > previous) {
        setHide(true)
      } else {
        setHide(false)
      }
      })
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  useEffect(()=> {
    document.body.style.backgroundColor = "#080808"
        document.body.style.color = "#f5eddb"
  },[])
   useEffect(()=> {
      if (loading) {
          document.body.style.overflow = 'hidden'
      } else {
          document.body.style.overflow = 'auto'
      }
      document.body.style.transition = "background-color 0.5s ease, color 0.5s ease"
      }, [loading])
  return (
    <>
    
    <AnimatePresence>
      {loading && <Loader setLoading={setLoading}/>}
    </AnimatePresence>
    <div className='relative w-full h-full z-1000'>
      <motion.div style={{ width: width }} className='fixed top-0 z-1000 origin-left h-1 bg-[#F5F1E8]'></motion.div>
    </div>
     
     <div className=''>
      <div className='relative h-screen'>
      
      <video className='h-full absolute inset-0 w-full object-cover' src="/images/hero-video.mp4" autoPlay muted loop playsInline />
      <div className='bg-black/60 absolute inset-0'></div>
      <Navbar hide={hide} setHide={setHide} />
      <Home />
      </div>
      <Performance />
      <Design />
      <Products />
      <Tech />
      <Footer />
     </div>
    
    
    </>
  )
}

export default App
