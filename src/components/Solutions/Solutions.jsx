import React from 'react'
import Img from '../../images/custom-img-14-copyright.jpg'

const Solutions = () => {
    return (
        <div className='w-[90%] m-auto grid grid-cols-1 gap-5 my-10'>
            <div className='text-[#212724] flex flex-col justify-center gap-3'>
                <p className='uppercase text-[13px] font-semibold'>
                    Empowering financial freedom
                </p>
                <h1 className='text-[35px]/9 font-semibold'>
                    Discover our Innovative Solutions
                </h1>
                <div className='flex flex-col gap-3'>
                    <div className='flex'>
                        <p className='w-[40px] h-[40px] bg-black text-white rounded-full flex justify-center items-center text-[15px]'>
                            1
                        </p> {" "}
                        <div className='ml-5 w-[80%]'>
                            <p className='text-[19px] font-semibold'>Fintech & Innovation</p>
                            <p className='w-[80%] text-[15px] font-light'>We enhance accessibility and security through tailored financial strategies.</p>
                        </div>
                    </div>
                    <div className='flex '>
                        <p className='w-[40px] h-[40px] bg-black text-white rounded-full flex justify-center items-center'>
                            2
                        </p> {" "}
                        <div className='ml-5 w-[80%]'>
                            <p className='text-[19px] font-semibold'>Innovative finance</p>
                            <p className='w-[80%] text-[15px] font-light'>Elementra transforms finance through cutting-edge solutions and technology.</p>
                        </div>
                    </div>
                    <div className='flex '>
                        <p className='w-[40px] h-[40px] bg-black text-white rounded-full flex justify-center items-center'>
                            3
                        </p> {" "}
                        <div className='ml-5 w-[80%]'>
                            <p className='text-[19px] font-semibold'>Financial solutions</p>
                            <p className='w-[80%] text-[15px] font-light'>We empower clients with customized solutions that yield significant outcomes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rounded-3xl'>
                <img src={Img} alt="Image" className='rounded-3xl' />
            </div>
        </div>
    )
}

export default Solutions
