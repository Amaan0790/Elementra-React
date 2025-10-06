import React from 'react'
import { motion } from "framer-motion";

const HeaderText = () => {
    const letters = "Financial Freedom".split("");

    // Variants for each letter
    const letterVariants = {
        initial: { y: 30, opacity: 0 },  // starts 30px below
        animate: { y: 0, opacity: 1 }    // slides to original position
    };
    return (
        <div className='absolute bottom-9 w-full'>
            <h1 className="text-[11.82vw] text-[#F7F6E3] flex justify-center overflow-hidden">
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={letterVariants}
                        initial="initial"
                        animate="animate"
                        transition={{
                            delay: index * 0.05,   // stagger letters
                            duration: 0.5,         // animation duration
                            ease: "easeOut",       // smooth easing
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </h1>
        </div>
    )
}

export default HeaderText
