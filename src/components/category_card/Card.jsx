import React from 'react'
import bshoe from '../../assets/blueshoe.png'

const Card = ({ name }) => {
    return (
        <div className='flex flex-col items-center space-y-3'>

            <div className='h-[5rem] w-[5rem] overflow-hidden rounded-full  border-solid border-2  border-green-800 hover:border-red-300 p-1'>
                <div className='flex rounded-full overflow-hidden '>
                    <img className=' object-contain ' src={bshoe} alt="" />
                </div>

            </div>
            <div>
                <p className='text-black font-sans font-semibold'>{name}</p>
            </div>
        </div>
    )
}

export default Card