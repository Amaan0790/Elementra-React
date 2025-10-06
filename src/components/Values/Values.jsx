import React from 'react'
import NoBGComponent from '../HelperComponents/NoBGComponent'
import BGComponent from '../HelperComponents/BGComponent'
import img1 from '../../images/custom-img-11-copyright.png'
import img2 from '../../images/custom-img-08-copyright.png'
import img3 from '../../images/custom-img-07-copyright.png'

const Values = () => {
    return (
        <div className='grid grid-cols-1 gap-1 w-[90%] m-auto my-3'>

            <BGComponent>
                <img src={img1} alt="Image 1" className='rounded-2xl' />
                <img src={img2} alt="Image 2" className='rounded-2xl' />
                <img src={img3} alt="Image 3" className='rounded-2xl' />
            </BGComponent>
            <NoBGComponent>
                <p className='text-[13px]'>Our Values</p>
                <h1 className='text-[36px]'>
                    <span className='text-[#FB5E00]'>Transforming digital</span> <br />
                    <span>
                        finance for all
                    </span>
                </h1>
                <p className='text-[15px] w-[90%]'>Elementra is dedicated to enhancing financial accessibility and security through innovative solutions that empower users in their financial journeys.</p>
            </NoBGComponent>
        </div>
    )
}

export default Values
