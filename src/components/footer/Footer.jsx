import React from 'react'
import { FaYoutube, FaInstagram, FaSquareXTwitter, FaFacebook } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className=' text-black bg-blue-300 grid sm:grid-cols-3 gap-7 sm:gap-0 mt-6'>
            <div className='space-y-2 mt-5 flex justify-center'>
                <div className='space-y-4'>
                    <p className='text-lg font-semibold'>SUPPORT</p>
                    <p className='cursor-pointer hover:underline'>Contact us</p>
                    <p className='cursor-pointer hover:underline'>Track Order</p>
                    <p className='cursor-pointer hover:underline'>Shoe Order</p>
                    <p className='cursor-pointer hover:underline'>Tech Glossary</p>
                </div>
            </div>

            <div className='space-y-2 mt-5 flex justify-center'>
                <div className='space-y-4'>
                    <p className='text-lg font-semibold'>ABOUT</p>
                    <p className='cursor-pointer hover:underline'>Company</p>
                    <p className='cursor-pointer hover:underline'>Investors</p>
                    <p className='cursor-pointer hover:underline'>Careers</p>
                    <p className='cursor-pointer hover:underline'>Store Locator</p>
                </div>
            </div>

            <div className=' space-y-5 flex flex-col items-center justify-center mb-6 sm:mb-0'>
                <div>
                    <p className='text-lg font-semibold uppercase'>Stay up to date</p>
                    <p className='cursor-pointer'>Sign Up for Email</p>
                </div>
                <div className='text-3xl flex space-x-6'>
                    <FaYoutube className='cursor-pointer' />
                    <FaInstagram className='cursor-pointer' />
                    <FaSquareXTwitter className='cursor-pointer' />
                    <FaFacebook className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Footer