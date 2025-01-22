"use client";

import { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AppButton from "@ui/AppButton";
import HomeBanner from "@layout/HomeBanner";
import HomeBoat from "@layout/HomeBoat";
import TripCard from "@layout/TripCard";
import HomeDestinations from "@layout/HomeDestinations";
import FaqAccordion from "@layout/FaqAccordion";

import "@styles/pages/home.scss";

gsap.registerPlugin(ScrollTrigger);

const bannerData = {
    video_url: 'https://www.youtube.com/embed/CVCEDLssMUA?si=-wH_Jvbw1Js18BIr',
    title: 'Premier Diving Liveaboards',
    desc: 'Wallacea Dive Cruises is an Indonesian liveaboard operator'
}

const boatData = [
    {
        title: 'Msy Seashore',
        price_start: 3800,
        desc: 'A luxury traditional Indonesian sailing Phinisi offering scuba diving trips and adventure charters to the best destinations of Indonesia.',
        learn_more: 'https://google.com',
        view_trips: 'https://maps.google.com',
        images: [
            'https://picsum.photos/705/639?radnom=1',
            'https://picsum.photos/705/639?radnom=2',
            'https://picsum.photos/705/639?radnom=3'
        ]
    },
    {
        title: 'Mv Ambai',
        price_start: 3800,
        desc: 'A luxury traditional Indonesian sailing Phinisi offering scuba diving trips and adventure charters to the best destinations of Indonesia.',
        learn_more: 'https://google.com',
        view_trips: 'https://maps.google.com',
        images: [
            'https://picsum.photos/705/639?radnom=4',
            'https://picsum.photos/705/639?radnom=5',
            'https://picsum.photos/705/639?radnom=6'
        ]
    }
];

const tripData = [
    {
        name: 'Banda Sea, Raja Ampat, Triton Bay',
        ship_name: 'MV Ambai',
        ship_code: 'A241108',
        destination_start: 'Sorong (SOQ)',
        destination_start_date: '08 Nov 2024',
        destination_end: 'Kaimana (KNG)',
        destination_end_date: '22 Nov 2024',
        nights: 14,
        price: 5000,
        detail_link: '#',
    },
    {
        name: 'Raja Ampat North Expedition',
        ship_name: 'MV Blue Manta',
        ship_code: 'B250108',
        destination_start: 'Kaimana (KNG)',
        destination_start_date: '08 Jan 2025',
        destination_end: 'Labuan Bajo (LBJ)',
        destination_end_date: '18 Jan 2025',
        nights: 10,
        price: 4500,
        price_discount: 4000,
        discount: 10,
        space_left: 1,
        detail_link: '#',
    },
    {
        name: 'Komodo National Park, Flores',
        ship_name: 'MV Samambaia',
        ship_code: 'S241215',
        destination_start: 'Labuan Bajo (LBJ)',
        destination_start_date: '15 Dec 2024',
        destination_end: 'Sorong (SOQ)',
        destination_end_date: '21 Dec 2024',
        nights: 6,
        price: 3500,
        price_discount: 3000,
        space_left: 4,
        detail_link: '#',
    },
    {
        name: 'Krakatau, Volcano Under the Sea Trip',
        ship_name: 'MV Blue Manta',
        ship_code: 'B250108',
        destination_start: 'Kaimana (KNG)',
        destination_start_date: '08 Jan 2025',
        destination_end: 'Labuan Bajo (LBJ)',
        destination_end_date: '18 Jan 2025',
        nights: 10,
        price: 5500,
        discount: 10,
        space_left: 2,
        detail_link: '#',
    },
];

const destinationData = [
    {
        link: '#',
        price: 1000,
        name: 'Raja Ampat',
        time_start: 'October',
        time_end: 'June',
        highlight: 'Hundreds of limestone Islands',
        marine: 'Wobbegong sharks',
        image: 'https://picsum.photos/435/523?random=1'
    },
    {
        link: '#',
        price: 1000,
        name: 'Raja Ampat',
        time_start: 'October',
        time_end: 'June',
        highlight: 'Hundreds of limestone Islands',
        marine: 'Wobbegong sharks',
        image: 'https://picsum.photos/435/523?random=2'
    },
    {
        link: '#',
        price: 1000,
        name: 'Raja Ampat',
        time_start: 'October',
        time_end: 'June',
        highlight: 'Hundreds of limestone Islands',
        marine: 'Wobbegong sharks',
        image: 'https://picsum.photos/435/523?random=3'
    },
    {
        link: '#',
        price: 1000,
        name: 'Raja Ampat',
        time_start: 'October',
        time_end: 'June',
        highlight: 'Hundreds of limestone Islands',
        marine: 'Wobbegong sharks',
        image: 'https://picsum.photos/435/523?random=4'
    },
    
]

const faqData = [
    {
        title: 'How does this work?',
        desc: 'MV AMBAI crew are standing by to welcome you onboard. Safety briefing, crew introduction, necessary dive paperwork, cabin allocation, and ship orientation will take place before departure. Use the first day to familiarize yourself with the vessel and make yourself comfortable.'
    },
    {
        title: 'What is included in the package?',
        desc: 'The package includes accommodation, meals, diving equipment, and guided dives. Additional costs such as marine park fees and alcoholic beverages may apply.'
    },
    {
        title: 'What should I bring with me?',
        desc: 'It is recommended to bring personal toiletries, sunscreen, swimwear, and a light jacket. If you are a photographer, do not forget your camera gear and underwater housing.'
    },
    {
        title: 'Are there medical facilities onboard?',
        desc: 'The vessel is equipped with a first-aid kit and emergency oxygen. However, passengers with medical conditions should carry their medications and inform the crew prior to boarding.'
    },
    {
        title: 'How do I book my trip?',
        desc: 'Booking is easy. Simply visit our website, select your desired itinerary, and complete the reservation process online. For assistance, feel free to contact our support team.'
    },
];

const Testing = () => {

    const fadeUp = (elements: string | HTMLElement[]) => {

        const target = typeof elements === 'string' ? Array.from(document.querySelectorAll(elements)) : elements;

        target.map( element => {
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
        })
    };

    const boatLoop = boatData.map( (boat, index) => {
        return (
            <HomeBoat key={index} index={index} title={boat.title} price={boat.price_start} desc={boat.desc} learn_more={boat.learn_more} view_trips={boat.view_trips} images={boat.images} />
        )
    });

    const tripLoop = tripData.map( (trip, index) => {
        return (
            <TripCard 
                key={index} 
                name={trip.name} 
                ship_name={trip.ship_name} 
                ship_code={trip.ship_code} 
                destination_start={trip.destination_start} 
                destination_start_date={trip.destination_start_date} 
                destination_end={trip.destination_end} 
                destination_end_date={trip.destination_end_date} 
                nights={trip.nights} 
                price={trip.price} 
                price_discount={trip.price_discount} 
                discount={trip.discount} 
                space_left={trip.space_left} 
                detail_link={trip.detail_link} 
            />
        )
    });

    useEffect( () => {
        const pageTitles = Array.from(document.querySelectorAll('[class^=home-section__title]')) as HTMLElement[];
        fadeUp(pageTitles);
        fadeUp('.home-trips__footer');
        fadeUp('.home-faq__desc');
        fadeUp('.home-faq__button-container');
        fadeUp('.home-faq__accordion-container');
    });

    return (
        <div className="page-banner">
            <HomeBanner video_url={bannerData.video_url} title={bannerData.title} desc={bannerData.desc} />
            <section className="home-section">
                <div className="container">
                    <h2 className="home-section__title">
                        Our Boats
                    </h2>
                </div>
                {boatLoop}
            </section>
            <section className="home-section home-trips">
                <div className="container">
                    <h2 className="home-section__title--centered home-trips__title">
                        Upcoming Trips
                    </h2>
                    {tripLoop}
                    <div className="home-trips__footer">
                        <AppButton link="#" buttonType="secondary" buttonVariation="gold">
                            View All
                        </AppButton>
                    </div>
                </div>
            </section>
            <HomeDestinations list={destinationData} />
            <section className="home-section home-faq">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <h2 className="home-section__title home-faq__title">
                                FAQs
                            </h2>
                            <p className="home-faq__desc">
                                We bed any for assistance indulgence unpleasing. Not thoughts all exercise blessing. 
                            </p>
                            <div className="home-faq__button-container">
                                <AppButton link="#" buttonType="tertiary" buttonVariation="gold" additionalClasses="home-faq__button">
                                    More FAQs
                                </AppButton>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7 offset-lg-1">
                            <div className="home-faq__accordion-container">
                                <FaqAccordion list={faqData} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testing;