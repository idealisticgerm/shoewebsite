import React from 'react'

const ShoeCard = ({ urll }) => {
    return (
        <div className='border border-black mx-4 '>
            <div className='bg-white '>
                <div className='flex justify-center'>
                    <img className='object-cover' src={urll} alt="" />
                </div>

                <div className='space-y-4 text-lg p-4 mt-5'>
                    <p className='font-semibold'>Giannis Freak 6 EP</p>
                    <p className='font-medium opacity-60'>Basketball Shoes</p>
                    <p className='font-semibold'>MRP: ₹11 895.00</p>
                </div>
            </div>
        </div>
    )
}

export default ShoeCard