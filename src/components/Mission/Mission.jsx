import React from 'react'
import BGComponent from '../HelperComponents/BGComponent'
import NoBGComponent from '../HelperComponents/NoBGComponent'
import Img from '../../images/custom-img-12-copyright.png'

const Mission = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-1 w-[90%] m-auto my-3'>
            <div className={`bg-[#F2F1E1] rounded-3xl py-[20px] px-[20px] flex flex-col gap-2 h-fit w-full my-5 order-1 lg:py-[52px] lg:px-[58px] lg:h-[600px] lg:w-[630px]`}>
                <img src={Img} alt="Image" className='rounded-3xl' />
            </div>
            <div className={`flex flex-col justify-center gap-3 my-5 order-2 md:ml-5 lg:gap-5`}>
                <p className='text-[13px] md:text-[14px] lg:text-[16px]'>Our Mission</p>
                <h1 className='text-[36px]/10 md:text-[45px]/12 lg:text-[57px]/15'>
                    Innovative solutions for a digital future
                </h1>
                <p className='text-[15px]/6 font-light'>Elementra empowers users with innovative tools to enhance their financial journey and achieve their goals.</p>
                <button className=' bg-[#FB5E00] rounded-full w-[167px] h-[47px] text-white text-[15px] font-semibold'>
                    Discover More
                </button>
            </div>
        </div>
    )
}

export default Mission
