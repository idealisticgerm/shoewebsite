import React from 'react'
import Card from './Card'

const CategoryCard = () => {
    return (
        <>
            <div className='text-black uppercase font-semibold text-[1.5rem] font-sans text-center'>Categories</div>
            <div className='flex gap-5 md:mx-16 mt-10 overflow-x-scroll mx-2 no-scrollbar  sm:justify-center '>

                <div className='mx-[1rem] flex flex-col items-center space-y-5 justify-center '>

                    <div className='flex space-x-5 cursor-pointer  '>
                        {["Running", "Training", "Football", "Bags", "Motorsports"].map((item) => <Card name={item} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryCard