import React from 'react'
import { TiTickOutline } from "react-icons/ti";
import Img1 from '../../images/custom-img-09-copyright.png'
import Img2 from '../../images/custom-img-10-copyright.png'
import NoBGComponent from '../HelperComponents/NoBGComponent';
import BGComponent from '../HelperComponents/BGComponent';

const About = () => {
    return (
        <div className='grid grid-cols-1 gap-1 w-[90%] m-auto my-[50px]'>
            <BGComponent>
                <img src={Img2} alt="Image 2" className='rounded-3xl' />
                <img src={Img1} alt="Image 1" className='rounded-3xl' />
            </BGComponent>
            <NoBGComponent title="title">
                <p className='text-[13px]'>About Elementra</p>
                <h1 className='text-[36px]/9 flex flex-col gap-0'>
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
            </NoBGComponent>
        </div>
    )
}

export default About
