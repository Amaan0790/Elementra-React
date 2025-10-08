import React from 'react'

const BGComponent = ({ children, orderClass }) => {
    return (
        <div className={`bg-[#F2F1E1] rounded-3xl py-[20px] px-[20px] flex flex-col gap-2 h-fit w-full my-5 ${orderClass}`}>
            {children}
        </div>
    )
}

export default BGComponent
