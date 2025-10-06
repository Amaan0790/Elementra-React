import React from 'react'
import BGComponent from '../HelperComponents/BGComponent'
import NoBGComponent from '../HelperComponents/NoBGComponent'
import Img from '../../images/custom-img-12-copyright.png'

const Mission = () => {
    return (
        <div className='grid grid-cols-1 gap-1 w-[90%] m-auto my-3'>
            <BGComponent>
                <img src={Img} alt="Image" className='rounded-3xl' />
            </BGComponent>
            <NoBGComponent>
                <p className='text-[13px]'>Our Mission</p>
                <h1 className='text-[36px]'>
                    Innovative solutions for a digital future
                </h1>
                <p className='text-[15px]'>Elementra empowers users with innovative tools to enhance their financial journey and achieve their goals.</p>
                <button className=' bg-[#FB5E00] rounded-full w-[167px] h-[47px] text-white text-[15px] font-semibold'>
                    Discover More
                </button>
            </NoBGComponent>
        </div>
    )
}

export default Mission
