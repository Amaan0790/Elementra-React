import React from 'react'

const NoBGComponent = ({ children }) => {
    return (
        <div className='flex flex-col justify-center gap-1'>
            {children}
        </div>
    )
}

export default NoBGComponent
