import React from 'react'
import whiteLogo from '../../images/logo-white-retina.png'
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {



    return (
        <header
            className='lg:w-[90%] m-auto flex justify-between pt-3 text-[1rem] '
        >
            <motion.img
                src={whiteLogo}
                alt="Company Logo"
                className='max-h-[26px]'
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 1.5,
                    ease: 'linear'
                }}
            />
            <motion.p
                className='hidden sm:flex gap-8 text-[#F7F6E3] text-[1.2rem]'
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 1.5,
                    ease: 'linear'
                }}
            >
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Pricing</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </motion.p>
            <motion.button
                className='hidden bg-[#FB5E00] text-white py-2 px-4 rounded-full'
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 1.5,
                    ease: 'linear'
                }}
            >Get in touch
            </motion.button>
        </header>
    )
}

export default Header
