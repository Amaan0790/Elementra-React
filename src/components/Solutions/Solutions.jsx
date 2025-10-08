import React from 'react'
import Img from '../../images/custom-img-14-copyright.jpg'

const Solutions = () => {
    return (
        <div className='w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 gap-5 my-10 '>
            <div className='text-[#212724] flex flex-col justify-center gap-3 md:gap-4 lg:gap-12 lg:h-[740px]'>
                <p className='uppercase text-[13px] md:text-[14px] font-semibold'>
                    Empowering financial freedom
                </p>
                <h1 className='text-[35px]/9 md:text-[45px]/12 lg:text-[57px]/14 font-semibold'>
                    Discover our Innovative Solutions
                </h1>
                <div className='flex flex-col gap-3'>
                    <div className='flex'>
                        <p className='w-[40px] md:w-[50px] h-[40px] md:h-[50px] lg:w-[60px] lg:h-[60px] bg-black text-white rounded-full flex justify-center items-center text-[15px] md:text-[16px] '>
                            1
                        </p> {" "}
                        <div className='ml-5 w-[80%]'>
                            <p className='text-[19px] md:text-[20px] lg:text-[23px] font-semibold'>Fintech & Innovation</p>
                            <p className='w-[80%] text-[15px] md:text-[16px] font-light'>We enhance accessibility and security through tailored financial strategies.</p>
                        </div>
                    </div>
                    <div className='flex '>
                        <p className='w-[40px] md:w-[50px] h-[40px] md:h-[50px] lg:w-[60px] lg:h-[60px] bg-black text-white rounded-full flex justify-center items-center text-[15px] md:text-[16px]'>
                            2
                        </p> {" "}
                        <div className='ml-5 w-[80%]'>
                            <p className='text-[19px] md:text-[20px] lg:text-[23px] font-semibold'>Innovative finance</p>
                            <p className='w-[80%] text-[15px] md:text-[16px] font-light'>Elementra transforms finance through cutting-edge solutions and technology.</p>
                        </div>
                    </div>
                    <div className='flex '>
                        <p className='w-[40px] md:w-[50px] h-[40px] md:h-[50px] lg:w-[60px] lg:h-[60px] bg-black text-white rounded-full flex justify-center items-center text-[15px] md:text-[16px]'>
                            3
                        </p> {" "}
                        <div className='ml-5 w-[80%]'>
                            <p className='text-[19px] md:text-[20px] lg:text-[23px] font-semibold'>Financial solutions</p>
                            <p className='w-[80%] text-[15px] md:text-[16px] font-light'>We empower clients with customized solutions that yield significant outcomes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rounded-3xl w-full h-full lg:h-[740px]'>
                <img src={Img} alt="Image" className='rounded-3xl w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default Solutions
