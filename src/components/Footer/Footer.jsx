import React from 'react'
import Img from '../../images/logo-light-retina.png'
const Footer = () => {
    return (
        <footer className=' bg-[#202723] text-[#CACABD] pt-25 rounded-t-[30px] lg:rounded-t-[70px]'>
            <div className='w-[90%] lg:w-[80%] m-auto grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='flex flex-col gap-1.5 md:gap-[30px] items-start w-fit h-fit'>
                    <img
                        src={Img}
                        alt="Logo"
                        className='w-[150px] md-[200px]'
                    />
                    <p className='text-sm md:text-[16px]/7 w-fit lg:w-[80%]'>At Elementra, we harness innovation and collaboration to achieve excellence. Our passionate team is ready to assist you.</p>
                </div>
                <div className='flex flex-col gap-2.5 lg:gap-5'>
                    <h3 className='text-[17px] md:text-[18px] lg:text-[19px] font-bold'>
                        Contact
                    </h3>
                    <p className='text-sm/2 md:text-[16px]/7 '>USA - 123 Fintech Avenue, San Francisco, CA 94105</p>
                    <p className='text-sm md:text-[16px]/7'>info@elementra.com</p>
                    <p className='text-sm md:text-[18px] lg:text-[19px] font-bold'>+1-415-555-0199</p>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='w-[50%] flex flex-col gap-1.5 md:gap-2.5 lg:gap-5'>
                        <h3 className='text-[17px] md:text-[18px] lg:text-[19px] font-bold'>
                            Links
                        </h3>
                        <a href='#' className='text-[15px] md:text-[16px]'>Home</a>
                        <a href='#' className='text-[15px] md:text-[16px]'>About</a>
                        <a href='#' className='text-[15px] md:text-[16px]'>Pricing</a>
                        <a href='#' className='text-[15px] md:text-[16px]'>Blog</a>
                        <a href='#' className='text-[15px] md:text-[16px]'>Contact</a>
                    </div>
                    <div className='w-[50%] flex flex-col gap-1.5 md:gap-2.5'>
                        <h3 className='text-[17px] md:text-[18px] lg:text-[19px] font-bold'>Follow Us</h3>
                        <p className='text-[15px] md:text-[16px]'>Facebook</p>
                        <p className='text-[15px] md:text-[16px]'>Twitter</p>
                        <p className='text-[15px] md:text-[16px]'>Instagram</p>
                        <p className='text-[15px] md:text-[16px]'>Youtube</p>
                    </div>
                </div>
            </div>
            <div className='w-[80%] m-auto'>
                <p className='text-[clamp(2rem,80vw,20rem)] text-[#414543]'>Edumix</p>
            </div>
        </footer>
    )
}

export default Footer
