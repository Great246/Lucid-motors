import React from 'react'
import { FaFacebook, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='mt-35 md:mt-50 bg-black shadow-2xl shadow-amber-200 text-[#f5eddb] flex py-10 justify-center gap-10 items-center flex-wrap'>
        <div className='flex flex-col gap-1.5 px-4'>
            <p>Subscribe to Lucid Updates</p>
            <div className='flex gap-1'><input type="text" placeholder='Email' className='px-0.5 text-sm border border-[#f5eddb] rounded-sm w-50 md:p-2'/>
            <button className='bg-[#f5eddb] text-sm text-black rounded-sm p-2'>Subscribe</button>
            </div>
        </div>
        <div className='flex justify-between w-full max-w-70 items-center px-4'>
            <div className='flex flex-col gap-1'>
                <a href="/" className='hover:text-[#A67C52] duration-150'>Overview</a>
            <a href="#perform" className='hover:text-[#A67C52] duration-150'>Performance</a>
            <a href="#design" className='hover:text-[#A67C52] duration-150'>Design</a>
            <a href="#product" className='hover:text-[#A67C52] duration-150'>Products</a>
            <a href="#tech" className='hover:text-[#A67C52] duration-150'>Technology</a>
            </div>
            <div className='flex flex-col gap-1'>
            <p  className='hover:text-[#A67C52] duration-150 cursor-pointer'>Support</p>
            <p  className='hover:text-[#A67C52] duration-150 cursor-pointer'>FAQ</p>
            <p className='hover:text-[#A67C52] duration-150 cursor-pointer'>Careers</p>
            <p className='hover:text-[#A67C52] duration-150 cursor-pointer'>Media</p>
            <p className='hover:text-[#A67C52] duration-150 cursor-pointer'>Contact Us</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-0.5'>
            <div className='flex gap-2.5'>
            <a href="https://www.tiktok.com/@greylix243?_r=1&_t=ZS-96K2LKZvEqS" target='_blank' rel='noopener noreferrer'>
            <FaTiktok />
            </a>
            <a href="https://www.facebook.com/share/1BkEwPY3sZ/" target='_blank' rel='noopener noreferrer'>
            <FaFacebook />
            </a>
            <a href="https://wa.me/2348106903399" target='_blank' rel='noopener noreferrer'>
            <FaWhatsapp />
            </a>
            <a href="https://www.tiktok.com/@greylix243?_r=1&_t=ZS-96K2LKZvEqS" target='_blank' rel='noopener noreferrer'>
            <FaYoutube />
            </a>
            </div>
            <p className='text-[12px]'>@ 2026 Lucid Group, Inc. All rights reserved.</p>
            <div className='flex gap-1 justify-center items-center'>
                <p className='underline text-[12px]'>Privacy Policy</p>
                <div className='w-0.5 h-5 bg-white'></div>
                <p className='underline text-[12px]'>Terms of Use</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer