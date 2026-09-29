import React, { useEffect, useRef } from 'react'
import Card from '../components/Card'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { carddet } from '../components/carddet';
import { motion, useInView } from 'motion/react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Products = () => {
  const sectionref = useRef(null)
  const inView = useInView(sectionref, {amount: 0.05})
  useEffect(()=> {
  document.body.style.backgroundColor = inView ? "white" : "#080808"
  document.body.style.color = inView ? "black" : "#f5eddb"
  }, [inView])
  return (
        <section ref={sectionref} id='product' className='px-4 mt-20 mb-20 flex flex-wrap justify-center items-center gap-10'>
            <motion.div className='max-w-150 w-full flex justify-center items-center flex-col'
            initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 2}}
            >
                <h1 className='text-2xl text-[#A67C52] font-semibold mb-5 ml-5'>Products</h1>
                <p className='text-xl md:text-3xl max-w-100'>Explore our lineup of groundbreaking electric vehicles tailored to
                  elevate your driving experience. From raw power to supreme efficiency, discover the model
                  that fits your lifestyle
                    </p>
            </motion.div>
            <motion.div className='flex gap-2 w-full max-w-160 justify-center items-center'
            initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 2}}
            >
                 <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={3}
      slidesPerView={1.1}
      breakpoints={{
        450: {
            slidesPerView: 2
        }
      }}
      navigation
      pagination={{ clickable: true }}
    >
        {carddet.map((card, i) => {
            return <SwiperSlide key={i}><Card properties={card} /></SwiperSlide>  
        })}
    </Swiper>
                
                

            </motion.div>
    </section>
  )
}

export default Products