import React from 'react'
import NoBGComponent from '../HelperComponents/NoBGComponent'
import BGComponent from '../HelperComponents/BGComponent'
import img1 from '../../images/custom-img-11-copyright.png'
import img2 from '../../images/custom-img-08-copyright.png'
import img3 from '../../images/custom-img-07-copyright.png'

const Values = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-1 w-[90%] m-auto my-3'>

            <div className={`bg-[#F2F1E1] rounded-3xl py-[20px] px-[20px] flex flex-col gap-2 h-fit w-full my-5 order-1 md:order-2 lg:py-[52px] lg:px-[58px] lg:h-[600px] lg:w-[630px]`}>
                <img src={img1} alt="Image 1" className='rounded-2xl' />
                <img src={img2} alt="Image 2" className='rounded-2xl' />
                <img src={img3} alt="Image 3" className='rounded-2xl' />
            </div>
            <div className={`flex flex-col justify-center gap-3 lg:gap-6 my-5 order-2 md:order-1`}>
                <p className='text-[13px] md:text-[14px] lg:text-[16px]'>Our Values</p>
                <h1 className='text-[36px]/10 md:text-[45px]/12 lg:text-[57px]/15'>
                    <span className='text-[#FB5E00]'>Transforming digital</span> <br />
                    <span>
                        finance for all
                    </span>
                </h1>
                <p className='text-[15px]/6  md:text-[16px] font-light w-[90%]'>Elementra is dedicated to enhancing financial accessibility and security through innovative solutions that empower users in their financial journeys.</p>
            </div>
        </div>
    )
}

export default Values
