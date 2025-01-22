"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BoatFilled from "@icon/boat-filled";
import AppButton from "@ui/AppButton";

import "@styles/components/layout/_TripCard.scss";

gsap.registerPlugin(ScrollTrigger);

type TripCardProps = {
    name: string;
    ship_name: string;
    ship_code: string;
    destination_start: string;
    destination_start_date: string;
    destination_end: string;
    destination_end_date: string;
    nights: number;
    price: number;
    price_discount?: number;
    discount?: number;
    space_left? :number;
    detail_link: string;
}

const TripCard = ({name, ship_name, ship_code, destination_start, destination_start_date, destination_end, destination_end_date, nights, price, price_discount, discount, space_left, detail_link} : TripCardProps) => {

    const TripCardRef = useRef<HTMLDivElement>(null);

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

    const SeatsLeft = () => {
        if (  space_left && space_left > 0 ) {
            return (
                <span className="trip-card__seats-left">
                {space_left} Space Left
                </span>
            )
        }
    }

    const ShowPrice = () => {
        if ( price_discount || discount ) {

            const show_price_discount : number = price_discount ? price_discount : price - (price * (discount? discount : 0) / 100);
            const show_discount : number = discount ? discount : Math.round(  ( (price - (price_discount? price_discount : price) ) / price ) * 100 );

            return (
                <p className="trip-card__price">
                    ${show_price_discount} <span className="trip-card__price-per-unit">/ Guest</span> <span className="trip-card__price-crossed">${price}</span> <span className="trip-card__discount-tag">{show_discount}%</span>
                </p>
            )
        } else {
            return (
                <p className="trip-card__price">
                    ${price} <span className="trip-card__price-per-unit">/ Guest</span>
                </p>
            )
        }
    }

    useEffect(() => {
        fadeUp(TripCardRef.current);
    }, [])

    return (
        <div className="trip-card" ref={TripCardRef}>
            {SeatsLeft()}
            <div className="trip-card__information-container--info">
                <div className="trip-card__info-header">
                    <h3 className="trip-card__title">
                        {name}
                    </h3>
                    <div className="trip-card__ships-code">
                        <p className="trip-card__ships-info--name">
                            {ship_name}
                        </p>
                        <p className="trip-card__ships-info">
                            {ship_code}
                        </p>
                    </div>
                </div>
                <div className="trip-card__info-content">
                    <div className="trip-card__destination-container">
                        <h4 className="trip-card__destination-name">
                            {destination_start}
                        </h4>
                        <p className="trip-card__destination-date">
                            {destination_start_date}
                        </p>
                    </div>
                    <div className="trip-card__destination-container--nights">
                        <div className="trip-card__icon-container">
                            <BoatFilled className="ratio-item"/>
                        </div>
                        <p className="trip-card__destination-nights">
                            {nights} Nights
                        </p>
                    </div>
                    <div className="trip-card__destination-container">
                        <h4 className="trip-card__destination-name">
                            {destination_end}
                        </h4>
                        <p className="trip-card__destination-date">
                            {destination_end_date}
                        </p>
                    </div>
                </div>
            </div>
            <div className="trip-card__information-container--price">
                <p className="trip-card__starts-from">
                    Starts from
                </p>
                {ShowPrice()}
                <div className="trip-card__cta-container">
                    <AppButton buttonType="primary" buttonVariation="gold">
                        Enquire
                    </AppButton>
                    <AppButton link={detail_link} buttonType="secondary" buttonVariation="gold">
                        Details
                    </AppButton>
                </div>
            </div>
        </div>
    )
}

export default TripCard;