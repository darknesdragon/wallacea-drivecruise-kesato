"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Swiper as SwiperType} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import { EffectFade, Thumbs } from 'swiper/modules';

import Image from "next/image";
import AppButton from "@ui/AppButton";

import "@styles/components/layout/_HomeBoat.scss";

gsap.registerPlugin(ScrollTrigger);

type HomeBoatProps = {
    index: number;
    title: string;
    price: number;
    desc: string;
    learn_more: string;
    view_trips: string;
    images: string[];
}

const HomeBoat = ({ index, title, price, desc, learn_more, view_trips, images} : HomeBoatProps) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);

    const titleRef = useRef<HTMLHeadingElement>(null);
    const priceRef = useRef<HTMLParagraphElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const thumbSwiperRef = useRef<HTMLDivElement>(null);

    const [thumbSwiper, setThumbSwiper] = useState<SwiperType | null>(null);
    const [SwiperWidth, setSwiperWidth] = useState(containerRef.current?.offsetWidth);

    const swiperSlideImageLoop = images.map( (image, index) => {
        return (
            <SwiperSlide key={index}>
                <div className="home-boat__image-container">
                    <Image src={image} alt="Boat preview image" className="ratio-item" width={705} height={639} />
                </div>
            </SwiperSlide>
        )
    });

    const definePosition = (index: number) => {
        if ( index % 2 == 0 ) {
            return 'home-boat';
        } else {
            return 'home-boat--reverse';
        }
    }

    const slideIn = (element: HTMLDivElement | null) => {
        gsap.fromTo(
            element,
            { 
                width: 0, 
                autoAlpha: 0 
            },
            { 
                width: containerRef.current?.offsetWidth, 
                autoAlpha: 1, 
                duration: 1, 
                scrollTrigger: {
                    trigger: element,
                    start: 'top 60%',
                    // markers: true
                } 
            }
        )
    }

    const fadeUp = (element: HTMLDivElement | null) => {
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

    useEffect( () => {
        // slideIn(containerRef.current);
        // console.log(SwiperRef.current.offsetWidth)
        setSwiperWidth(containerRef.current?.offsetWidth);
        slideIn(targetRef.current);
        fadeUp(titleRef.current);
        fadeUp(priceRef.current);
        fadeUp(descRef.current);
        fadeUp(ctaRef.current);
        fadeUp(thumbSwiperRef.current);
    }, [])

    return (
        <div className={definePosition(index)}>
            <div className="home-boat__swiper-container" ref={containerRef}>
                <div className="home-boat__swiper-inner" ref={targetRef}>
                    <Swiper
                        modules={[EffectFade, Thumbs]}
                        effect="fade"
                        slidesPerView={1}
                        className="home-boat__swiper"
                        loop={true}
                        thumbs={{ swiper: thumbSwiper }}
                        style={{width: SwiperWidth}}
                    >
                        {swiperSlideImageLoop}
                    </Swiper>
                </div>
            </div>
            <div className="home-boat__content">
                <div className="home-boat__text-container">
                    <h3 className="home-boat__title" ref={titleRef}>
                        {title}
                    </h3>
                    <p className="home-boat__price" ref={priceRef}>
                        Starts from <span className="home-boat__price-value">${price} USD</span>
                    </p>
                    <p className="home-boat__desc" ref={descRef}>
                        {desc}
                    </p>
                    <div className="home-boat__cta-container" ref={ctaRef}>
                        <AppButton link={learn_more} buttonType="secondary" buttonVariation="gold">
                            Learn More
                        </AppButton>
                        <AppButton link={view_trips} buttonType="tertiary" buttonVariation="gold">
                            View Trips
                        </AppButton>
                    </div>
                </div>
                <div className="home-boat__thumb-swiper-container" ref={thumbSwiperRef}>
                    <Swiper
                        onSwiper={setThumbSwiper}
                        spaceBetween={10}
                        slidesPerView={3}
                        className="home-boat__thumb-swiper"
                    >
                        {swiperSlideImageLoop}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default HomeBoat;