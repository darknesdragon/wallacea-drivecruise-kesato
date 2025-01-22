"use client";

import { useEffect, useState } from "react";
import gsap from 'gsap';

import IconClose from '@icon/close';

import "@styles/components/ui/_starlink-banner.scss";

const StarlinkBanner = () => {

    const [bannerStatus, setBannerStatus] = useState(true);

    const closeBanner = () => {
        // console.log('banner status before : ', bannerStatus);
        setBannerStatus(false);
    }
    
    useEffect( () => {
        // console.log('banner status after : ', bannerStatus);
        if ( !bannerStatus ) {
            gsap.to(
                '.starlink-banner', 
                { 
                    duration: .3, 
                    height: 0, 
                    autoAlpha: 0
                } 
            );
        }
    } )

    return (
        <div className="starlink-banner">
            <div className="starlink-banner__container">
                <div className="starlink-banner__content">
                    <p className="starlink-banner__text">
                        Stay connected with Starlink - Available on Board
                    </p>
                    <a href="#" className="starlink-banner__link">
                        <span className="starlink-banner__link-text">
                            Enquire
                        </span>
                    </a>
                </div>
            </div>
            <button className="starlink-banner__close-button" onClick={closeBanner}>
                <IconClose />
            </button>
        </div>
    )
}

export default StarlinkBanner;