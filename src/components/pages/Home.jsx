import React from 'react';
import Hero from '../hero/Hero';
import CategoryCard from '../category_card/CategoryCard';
import bannerimg from '../../assets/bannerimg.png'
import ShoeCards from '../shoe_card_container/ShoeCards';
import {FaArrowRightLong} from "react-icons/fa6";


const Home = () => {
    return (
        <div className='w-full '>
            {/* hero model  */}
            <div className='h-screen mt-[5rem]'>
                <Hero/>
            </div>
            {/* cards */}
            <div className='mt-10 mx-auto'>
                <CategoryCard/>
            </div>

            <section className='space-y-7 '>
                <h1 className='text-black text-center text-3xl sm:text-5xl mt-[7rem] font-sans font-semibold md:text-start md:px-7'>Trending This Week</h1>
                <ShoeCards/>
            </section>

            {/*banner*/}
            <div className='mt-10 bg-gradient-to-t from-[#3c291f]  to-[#0b0b0b] sm:h-auto py-8 sm:py-16 grid lg:grid-cols-2'>
                <div className='relative flex justify-center items-center'>
                    <div
                        className='mt-5 sm:mt-0 w-[50%] sm:w-[50%] md:w-[50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-700 to-red-400 rounded-full'>
                        <img src={bannerimg} alt=""/>
                    </div>
                    {/*<div className='flex flex-col w-[120px]  sm:w-[120px] bg-[#4d3123] p-1 rounded-xl absolute top-4 right-4 sm:top-16 sm:right-24'>*/}
                    {/*    <span className='text-yellow-400 text-xs font-sans'>Get upto 30% Off</span>*/}
                    {/*    <span className='text-white text-[9px]'>You can get value for money product</span>*/}
                    {/*</div>*/}
                </div>

                <div className='text-white font-sans sm:w-2/3 my-5 lg:flex flex-col space-y-6 mx-auto justify-center'>
                    <div className='font-semibold text-2xl sm:text-4xl text-center md:text-start '>We Provide High
                        Quality Footwear
                    </div>
                    <p className='text-sm sm:text-lg text-wrap text-center md:text-start '>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Adipisci possimus temporibus neque officiis tempora quibusdam rem
                        non repudiandae consequatur suscipit.</p>
                    <div className="text-center md:text-start">
                        <button
                            className='bg-[#c2db11] sm:w-[150px] rounded-md text-black font-mono hover:bg-[#c3d05a] text-center '>
                            <div className='flex justify-between sm:justify-around p-2 sm:p-3 items-center'>Shop
                                Now </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* video  */}
            {/* <div className='w-full h-[] mt-8 flex justify-center'>
                <div className=' overflow-hidden w-full     '>
                    <iframe
                        className=' top-0 left-0 w-full h-[800px] rounded-lg shadow-lg'
                        src="https://www.youtube.com/embed/Jw1Nm9ZfRW4?autoplay=1&mute=1&modestbranding=1&rel=0&showinfo=0&controls=0&disablekb=1&fs=0&iv_load_policy=3&playsinline=1"
                        title="Nike Shoes Jordan ads ( Motion Graphics Work )"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
            </div> */}


        </div>
    );
};

export default Home;
