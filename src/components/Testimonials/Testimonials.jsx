import React from 'react'
import Masonry from '@mui/lab/Masonry'
import Img1 from '../../images/testimonials-01-copyright.jpg'
import Img2 from '../../images/testimonials-02-copyright.jpg'
import Img3 from '../../images/testimonials-03-copyright.jpg'
import Img4 from '../../images/testimonials-04-copyright.jpg'
import Img5 from '../../images/testimonials-05-copyright.jpg'
import Img6 from '../../images/testimonials-06-copyright.jpg'
import Img7 from '../../images/testimonials-07-copyright.jpg'
import Img8 from '../../images/testimonials-08-copyright.jpg'

const Testimonials = () => {
    const testimonialsData = [
        {
            img: Img1,
            name: "Ben White",
            address: "Laketown, OH",
            testimonial: "Elementra has transformed my financial experience with their innovative solutions. I highly recommend their services!"
        },
        {
            img: Img2,
            name: "Mary Jones",
            address: "San Francisco, CA",
            testimonial: "Thanks to Elementra, managing my investments has never been easier."
        },

        {
            img: Img4,
            name: "Jenifer Wang",
            address: "New York, NY",
            testimonial: "Elementra has revolutionized my financial journey with their cutting-edge solutions. Highly recommend!"
        },
        {
            img: Img3,
            name: "Nicole Brown",
            address: "Miami, FL",
            testimonial: "Elementra has revolutionized my financial journey, ensuring transactions are smooth and secure. I wholeheartedly endorse their services!"
        },
        {
            img: Img5,
            name: "Sophia Lee",
            address: "Denver, CO",
            testimonial: "Elementra has transformed my financial experience. Their services are top-notch!"
        },
        {
            img: Img6,
            name: "Megan Taylor",
            address: "San Francisco, CA",
            testimonial: "Elementra's investment platform has truly empowered me to manage my finances effectively. Their tools are intuitive and insightful! Truly a game changer!"
        },
        {
            img: Img7,
            name: "Tonya Rowlands",
            address: "Dallas, TX",
            testimonial: "Elementra has transformed my financial experience, making transactions seamless and secure. I highly recommend their services to everyone!"
        },
        {
            img: Img8,
            name: "Andrew Walker",
            address: "Austin, TX",
            testimonial: "Elementra's investment platform has truly empowered me to manage my finances effectively."
        },
    ]
    return (
        <div className='bg-[#F2F1E1]'>
            <div className='bg-[#202723] text-[#F7F6E3] flex flex-col gap-4 md:gap-5 lg:gap-9 rounded-b-[30px] py-5'>
                <p className='uppercase font-bold tracking-wider text-sm md:text-[14px] text-center'>Client Testimonials</p>
                <h1 className='text-[36px]/10 md:text-[45px]/13 lg:text-[57px]/17 text-center w-[90%] m-auto'>
                    <span>We value your</span> <br />
                    <span className='text-[#FB5E00] '>feedback and insights</span>
                </h1>

                <div className='w-[90%] m-auto flex justify-center'>
                    <Masonry
                        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} // responsive columns
                        spacing={3}
                    >
                        {testimonialsData.map((item, index) => (
                            <div
                                key={index}
                                className='w-full bg-[#303633] pt-[40px] pb-[35px] px-[30px] rounded-[26px] flex flex-col justify-between gap-5 text-white shadow-lg hover:scale-[1.02] transition-transform duration-300'
                            >
                                <div className='flex flex-col gap-3'>
                                    <img src={item.img} alt={item.name} className='rounded-full w-[50px] md:w-[54px]' />
                                    <div>
                                        <p className='text-[17px] md:text-[18px] font-medium'>{item.name}</p>
                                        <p className='text-[15px] opacity-80'>{item.address}</p>
                                    </div>
                                </div>
                                <p className='text-[16px] md:text-[17px] leading-relaxed'>{item.testimonial}</p>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
