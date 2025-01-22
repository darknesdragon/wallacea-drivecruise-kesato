"use client";

import { useRef, useState, useEffect } from 'react';

import { Swiper as SwiperType } from 'swiper';
import { Scrollbar } from 'swiper/modules';
import { Swiper , SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

import ChevronRight from '@icon/chevron-right';
import IconCalendar from '@icon/calendar';
import IconStar from '@icon/star';
import IconFish from '@icon/fish';
import AppButton from '@ui/AppButton';

import "@styles/components/layout/_HomeDestinations.scss";

type HomeDestinationDetailProps = {
    link: string;
    price: number;
    name: string;
    time_start: string;
    time_end: string;
    highlight: string;
    marine: string;
    image: string;
}

type HomeDestinationsProps = {
    list: HomeDestinationDetailProps[];
}

const HomeDestinations = ({list} : HomeDestinationsProps) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const destinationsSwiper = useRef<SwiperType | null>(null);

    const fadeUp = (element: string | null) => {
        gsap.fromTo(
            element,
            { 
                y: 100, 
                autoAlpha: 0 
            },
            { 
                y: 0, 
                autoAlpha: 1, 
                duration: 1, 
                scrollTrigger: {
                    trigger: element,
                    start: 'top-=100 80%',
                    // markers: true
                }
            }
        )
    }

    const destinationListLoop = list.map( (destination, index) => {
        return (
            <SwiperSlide key={index} >
                <div className="home-destinations__image-wrapper">
                    <div className="home-destinations__image-container">
                        <Image src={destination.image} alt={destination.name} className="ratio-item" width={435} height={523} />
                        <div className="home-destinations__text-container">
                            <p className="home-destinations__start-from">
                                Start From ${destination.price}
                            </p>
                            <h3 className="home-destinations__title">
                                {destination.name}
                            </h3>
                            <div className="home-destinations__additional-info">
                                <div className="home-destinations__info-container">
                                    <div className="home-destinations__info-icon">
                                        <IconCalendar className="home-destinations__icon"/>
                                    </div>
                                    <p className="home-destinations__info-text">
                                        {destination.time_start} to {destination.time_end}
                                    </p>
                                </div>
                                <div className="home-destinations__info-container">
                                    <div className="home-destinations__info-icon">
                                        <IconStar className="home-destinations__icon"/>
                                    </div>
                                    <p className="home-destinations__info-text">
                                        {destination.highlight}
                                    </p>
                                </div>
                                <div className="home-destinations__info-container">
                                    <div className="home-destinations__info-icon">
                                        <IconFish className="home-destinations__icon"/>
                                    </div>
                                    <p className="home-destinations__info-text">
                                        {destination.marine}
                                    </p>
                                </div>
                                <AppButton buttonType="secondary" buttonVariation="white" additionalClasses="home-destinations__button">
                                    Learn More
                                </AppButton>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        )
    });

    const slideLength = destinationsSwiper.current?.slides?.length || 0;

    const navigationCondition = (direction : string) => {
        if ( activeIndex == 0 && direction == 'prev'  || activeIndex == slideLength - 2 && direction == 'next' ) {
            return { disabled: true };
        }
    };

    const changeSlide = (direction: string) => {
        if ( direction == 'prev' ) {
            destinationsSwiper.current?.slidePrev();
            setActiveIndex(activeIndex - 1);
        } else {
            destinationsSwiper.current?.slideNext();
            setActiveIndex(activeIndex + 1);
        }
    }

    useEffect( () => {
        fadeUp('.home-destinations__swiper-navigation');
        fadeUp('.home-destinations__swiper-container');
    }, [] )

    return (
        <section className="home-destinations">
            <div className="home-destinations__info">
                <div className="container">
                    <h2 className="home-section__title">
                        Destinations
                    </h2>
                    <div className="home-destinations__swiper-navigation">
                        <button className="home-destinations__swiper-button--prev" {...navigationCondition('prev')} onClick={ () => changeSlide('prev') }>
                            <ChevronRight className="home-destinations__swiper-navigation-icon"/>
                        </button>
                        <button className="home-destinations__swiper-button--next" {...navigationCondition('next')} onClick={ () => changeSlide('next') }>
                            <ChevronRight className="home-destinations__swiper-navigation-icon"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="home-destinations__swiper-container">
                <Swiper
                    // install Swiper modules
                    // ref={destinationsSwiper}
                    onSwiper={(swiper) => {
                        destinationsSwiper.current = swiper;
                    }}
                    modules={[EffectCreative, Scrollbar]}
                    spaceBetween={10}
                    slidesPerView={1.2}
                    allowTouchMove={true}
                    scrollbar={{ draggable: false }}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            opacity: 0,
                            // translate: [0, 0, -400],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 2,
                            allowTouchMove: false,
                        }
                    }}
                >
                    {destinationListLoop}
                </Swiper>
            </div>
        </section>
    )
}

export default HomeDestinations;