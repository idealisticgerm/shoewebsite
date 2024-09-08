import React, {useState} from 'react'
import ShoeCard from './ShoeCard'
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io";
import {data} from '../data/image';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


const ShoeCards = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    let carouselRef = null;

    const responsive = {
        0: {items: 1},
        720: {items: 2},
        1024: {items: 4},
    };

    const slidePrev = () => {
        if (carouselRef) {
            setActiveIndex((prevIndex) => {
                const newIndex = Math.max(prevIndex - 1, 0);
                carouselRef.slideTo(newIndex);
                return newIndex;
            });
        }
    };

    const slideNext = () => {
        if (carouselRef) {
            setActiveIndex((prevIndex) => {
                const newIndex = Math.min(prevIndex + 1, items.length - 1);
                carouselRef.slideTo(newIndex);
                return newIndex;
            });
        }
    };

    const syncActiveIndex = ({item}) => {
        setActiveIndex(item);
    }

    const items = data.map((item) => (<ShoeCard urll={item.url}/>));

    return (
        <div className=" ">

            <div className="relative p-5  ">
                <AliceCarousel
                    // mouseTracking
                    ref={(el) => (carouselRef = el)}
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    activeIndex={activeIndex}
                    onSlideChanged={syncActiveIndex}
                    // controlsStrategy="alternate"
                />
                {activeIndex !== items.length - 4 && <button

                    className="z-50 absolute  bg-[#fff] px-1 py-3 rounded-md  right-5 top-[50%]"
                    onClick={slideNext}
                >
                    <IoIosArrowForward className='text-black text-2xl'/>
                </button>}


                {activeIndex !== 0 && <button
                    className="z-50 bg-[#fff] px-1 py-3 rounded-md absolute left-5 top-[50%]"
                    onClick={slidePrev}
                >
                    <IoIosArrowBack className='text-black text-2xl'/>

                </button>}
            </div>
        </div>
    );
};

export default ShoeCards;
