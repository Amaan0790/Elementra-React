import React from 'react'

const Summary = () => {
    const data = [
        {
            title: "Founded in",
            description: "2024"
        },
        {
            title: "Location",
            description: "Oslo"
        },
        {
            title: "Team members",
            description: "31"
        },
        {
            title: "Revenue Generated",
            description: "$ 15M"
        }
    ]
    return (
        <div className='h-[247px] w-[90%] m-auto grid grid-cols-2 grid-rows-2 gap-1.5'>

            {data.map((d, index) =>
                <div>
                    <p className='text-[15px] font-normal'>
                        {d.title}
                    </p>
                    <p className='text-[40px]'>{d.description}</p>
                </div>
            )}

        </div>
    )
}

export default Summary
