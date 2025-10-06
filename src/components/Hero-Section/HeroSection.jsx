import React from 'react'
import Header from './Header'
import HeaderText from './HeaderText'

const HeroSection = () => {
    return (
        <div
            className="relative bg-[url('/src/images/custom-img-15-copyright.jpg')] bg-center bg-cover h-[550px] rounded-b-[30px]">
            <Header />
            <HeaderText />
        </div>
    )
}

export default HeroSection
