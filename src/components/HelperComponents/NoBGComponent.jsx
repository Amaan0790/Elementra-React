import React from 'react'

const NoBGComponent = ({ children, orderClass }) => {
    return (
        <div className={`flex flex-col justify-center gap-3 my-5 ${orderClass}`}>
            {children}
        </div>
    )
}

export default NoBGComponent
