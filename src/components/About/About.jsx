import React from 'react'
import { TiTickOutline } from "react-icons/ti";
import Img1 from '../../images/custom-img-09-copyright.png'
import Img2 from '../../images/custom-img-10-copyright.png'
import NoBGComponent from '../HelperComponents/NoBGComponent';
import BGComponent from '../HelperComponents/BGComponent';

const About = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-1 w-[90%] m-auto my-[50px]'>
            <div className={`bg-[#F2F1E1] rounded-3xl py-[20px] px-[20px] flex flex-col gap-2 h-fit w-full my-5 order-1 md:order-2 lg:py-[52px] lg:px-[58px] lg:h-[600px] lg:w-[630px]`}>
                <img src={Img2} alt="Image 2" className='rounded-3xl' />
                <img src={Img1} alt="Image 1" className='rounded-3xl' />
            </div>
            <div className={`flex flex-col justify-center gap-3 my-5 order-2 md:order-1 lg:gap-5`}>
                <p className='text-[13px] md:text-[14px] lg:text-[16px]'>About Elementra</p>
                <h1 className='text-[36px]/10 md:text-[45px]/12 lg:text-[57px]/15 flex flex-col gap-0'>
                    <span>Transforming digital</span>
                    <span className='text-[#FB5E00]'>
                        Finance Solutions
                    </span>
                </h1>
                <p className='text-[15px]/6 font-light'>Elementra is dedicated to transforming the digital finance landscape, empowering users with innovative solutions for financial freedom.</p>
                <ul className='text-[16px]'>
                    <li className="flex items-start gap-2">
                        <TiTickOutline className="text-[#FB5E00] mt-[2px] rounded-full" />
                        <span>Innovative solutions for financial empowerment</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <TiTickOutline className="text-[#FB5E00] mt-[2px] rounded-full" />
                        <span>Enhancing accessibility and security in finance</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <TiTickOutline className="text-[#FB5E00] mt-[2px] rounded-full" />
                        <span>Elementra is transforming the digital finance landscape.</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About
