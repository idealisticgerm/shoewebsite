import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const items = ["Men", "Women", "Kids", "Sports", "Outlet"];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const menuRef = useRef(null);

// Make sure the menu is hidden initially
    useGSAP(() => {
        gsap.set(menuRef.current, { x: '100%', autoAlpha: 0 });
    }, []);

    useGSAP(() => {
        if (isOpen) {
            gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: 'power3.out', autoAlpha: 1 });
        } else {
            gsap.to(menuRef.current, {
                x: '100%', duration: 0.5, ease: 'power3.in', autoAlpha: 0, onComplete: () => {
                    gsap.set(menuRef.current, { display: 'none' });
                }
            });
        }
    }, [isOpen]);

    useGSAP(() => {
        if (isOpen) {
            gsap.set(menuRef.current, { display: 'block' });
        }
    }, [isOpen]);

    return (
        <>
            <div className='hidden lg:flex justify-between lg:fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg  py-4 items-center  px-5  '>
                <div className='flex lg:space-x-10 justify-between lg:pl-7 items-center w-full lg:justify-start'>
                    <div className='logo '>
                        <img src={logo} className='w-16 h-14' alt="Logo" />
                    </div>

                    {/* Desktop Menu */}
                    <ul className='flex space-x-8 font-semibold text-lg'>
                        {items.map((item, index) => (
                            <li key={index} className='cursor-pointer hover:text-blue-600'>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Login Icons */}
                <div className='hidden lg:flex space-x-5 pr-10 '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke='black' strokeWidth={2} className="w-6 h-6">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                </div>
            </div>


            {/* for mobile */}
            <div className='flex justify-between py-2 items-center fixed px-5 lg:hidden min-w-full  backdrop-blur-lg
             max-w-screen-lg  top-0 z-50 '>
                <div className={`flex justify-between w-full `}>

                    <div className='logo '>
                        <img src={logo} className='w-16 h-14' alt="Logo" />
                    </div>

                    <div className='flex items-center'>
                        {/* Login Icons */}
                        <div className='flex space-x-5 pr-10 '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
                                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                            </svg>

                        </div>
                        <button onClick={toggleMenu} className='text-3xl'>
                            {<GiHamburgerMenu />}
                        </button>

                    </div>

                </div>


                <div ref={menuRef} className={`absolute top-0 bg-slate-100 w-2/3 right-0 space-y-6 h-screen flex flex-col justify-start items-end `}>
                    {/* Mobile Hamburger Menu */}
                    <div className='mt-7 pr-7'>
                        <button onClick={toggleMenu} className='text-3xl'>
                            {<FaTimes />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`pr-7 `}>
                        <ul className='space-y-5 font-sans font-semibold flex flex-col justify-center items-center text-lg '>
                            {items.map((item, index) => (
                                <li key={index} className='cursor-pointer hover:text-blue-600'>
                                    {item}
                                </li>
                            ))}
                            <li className='cursor-pointer'>Wishlist</li>

                        </ul>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Navbar;
