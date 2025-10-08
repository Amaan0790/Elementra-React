import React from 'react'
import Img1 from '../../images/services-01.png'
import Img2 from '../../images/services-02.png'
import Img3 from '../../images/services-03.png'

const Services = () => {
    const servicesData = [
        {
            img: Img1,
            title: "Digital payment solutions",
            description: "Our digital payment solutions enable businesses and consumers to transact securely and efficiently."
        },
        {
            img: Img2,
            title: "Investment platform",
            description: "Elementra's investment platform offers users a comprehensive suite of tools to manage their investments."
        },
        {
            img: Img3,
            title: "Financial tools",
            description: "Our digital payment solutions enable businesses and consumers to transact securely and efficiently."
        }
    ]
    return (
        <div className='bg-[#202723] text-white rounded-t-[30px] py-[60px] lg:pb-[90px]'>
            <div className='w-[90%] m-auto flex flex-col items-center gap-5 lg:gap-8'>
                <p className='text-center text-[13px] md:text-[14px] uppercase'>Our Innovative Services</p>
                <h1 className='text-center text-[36px]/10 md:text-[45px]/12 lg:text-[57px]/15 lg:w-[60%] m-auto'>
                    Explore our comprehensive financial solutions
                </h1>
                <div className='w-[80%] md:w-[95%] m-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {servicesData.map((data, index) =>
                        <div key={index} className='flex flex-col gap-1 lg:gap-4 text-center'>
                            <img src={data.img} alt="Service Image" className='w-[70px] md:w-[80px] m-auto' />
                            <h3 className='text-[19px] md:text-[20px] lg:text-[23px] text-[#F7F6E3]'>{data.title}</h3>
                            <p className='text-[15px] md:text-[16px] font-4 font-normal text-[#CACABD]'>{data.description}</p>
                        </div>
                    )}

                </div>
                <div className='flex justify-center mt-3.5'>
                    <button className='bg-[#FB5E00] py-3 px-4 rounded-full'>
                        Discover Our Services
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Services
