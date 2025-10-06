import React from 'react'
import Img from '../../images/logo-light-retina.png'
const Footer = () => {
    return (
        <footer className=' bg-[#202723] text-[#CACABD] pt-25 rounded-t-[30px] lg:rounded-t-[70px]'>
            <div className='w-[90%] lg:w-[80%] m-auto grid grid-cols-1 gap-5'>
                <div className='flex flex-col gap-1.5 items-start w-fit h-fit'>
                    <img
                        src={Img}
                        alt="Logo"
                        className='w-[150px]'
                    />
                    <p className='text-sm w-fit lg:w-[80%]'>At Elementra, we harness innovation and collaboration to achieve excellence. Our passionate team is ready to assist you.</p>
                </div>
                <div className='flex flex-col gap-2.5'>
                    <h3 className='text-[17px] font-bold'>
                        Contact
                    </h3>
                    <p className='text-sm/2'>USA - 123 Fintech Avenue, San Francisco, CA 94105</p>
                    <p className='text-sm'>info@elementra.com</p>
                    <p className='text-sm font-bold'>+1-415-555-0199</p>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='w-[50%] flex flex-col gap-1.5'>
                        <h3 className='text-[17px] font-bold'>
                            Links
                        </h3>
                        <a href='#' className='text-[15px]'>Home</a>
                        <a href='#' className='text-[15px]'>About</a>
                        <a href='#' className='text-[15px]'>Pricing</a>
                        <a href='#' className='text-[15px]'>Blog</a>
                        <a href='#' className='text-[15px]'>Contact</a>
                    </div>
                    <div className='w-[50%] flex flex-col gap-1.5'>
                        <h3 className='text-[17px] font-bold'>Follow Us</h3>
                        <p className='text-[15px]'>Facebook</p>
                        <p className='text-[15px]'>Twitter</p>
                        <p className='text-[15px]'>Instagram</p>
                        <p className='text-[15px]'>Youtube</p>
                    </div>
                </div>
            </div>
            <div className='w-[80%] m-auto'>
                <p className='text-[84px] text-[#414543]'>Edumix</p>
            </div>
        </footer>
    )
}

export default Footer
