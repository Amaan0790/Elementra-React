import React from 'react'
import { motion } from 'framer-motion'

const MarqueComp = () => {
    return (
        <div
            className='overflow-hidden  bg-[#F2F1E1] text-[#48CD4D] text-[70px] md:text-[110px] lg:text-[207px] py-5 md:py-8 lg:py-10'
        >
            <motion.div
                className='inline-block uppercase  whitespace-nowrap'
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 25, // speed
                    ease: "linear",
                }}
            >
                <span className="mr-10">Transform Your Finance</span>
                <span className="mr-10">Transform Your Finance</span>
            </motion.div>
        </div>
    )
}

export default MarqueComp
