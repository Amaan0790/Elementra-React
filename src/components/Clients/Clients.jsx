import React from 'react'
import { motion } from 'framer-motion'
import client1 from '../../images/partner-01-copyright.png'
import client2 from '../../images/partner-02-copyright.png'
import client3 from '../../images/partner-03-copyright.png'
import client4 from '../../images/partner-04-copyright.png'
import client5 from '../../images/partner-05-copyright.png'
import client6 from '../../images/partner-06-copyright.png'

const Clients = () => {
    const images = [client1, client2, client3, client4, client5, client6];
    return (
        <div className=''>
            <p className='py-[60px] text-center font-semibold text-[17px]'>Empowering financial leaders and innovative brands</p>
            <div className='grid grid-cols-2 gap-1 w-[90%] m-auto mt-2'>
                <div>
                    <motion.img
                        src={client1}
                        alt="Client 1"
                        className='opacity-50'
                        whileHover={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "linear"
                        }}
                    />
                </div>
                <div>
                    <motion.img src={client2}
                        alt="Client 2"
                        className='opacity-50'
                        whileHover={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "linear"
                        }}
                    />
                </div>
                <div>
                    <motion.img
                        src={client3}
                        alt="Client 3"
                        className='opacity-50'
                        whileHover={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "linear"
                        }} />
                </div>
                <div>
                    <motion.img
                        src={client4}
                        alt="Client 4"
                        className='opacity-50'
                        whileHover={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "linear"
                        }}
                    />
                </div>
                <div>
                    <motion.img
                        src={client5}
                        alt="Client 5"
                        className='opacity-50'
                        whileHover={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "linear"
                        }} />
                </div>
                <div>
                    <motion.img
                        src={client6}
                        alt="Client 6"
                        className='opacity-50'
                        whileHover={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "linear"
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Clients
