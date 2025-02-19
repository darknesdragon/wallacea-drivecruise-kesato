"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import gsap from 'gsap';

import "@styles/components/layout/_HomeBanner.scss";

type HomeBannerProps = {
    video_url: string;
    title: string;
    desc: string;
}

const HomeBanner = ({video_url, title, desc} : HomeBannerProps) => {

    const videoID = video_url.split('embed/')[1].split('?')[0];
    const videoThumbnail = 'https://img.youtube.com/vi/' + videoID + '/hqdefault.jpg';
    const videoEmbedUrl= 'https://www.youtube.com/embed/' + videoID + '?&autoplay=1&loop=1&mute=1&rel=0';

    const [windowLoad, setWindowLoad] = useState(false);
    const bannerContent = () => {
        if ( windowLoad ) {
            return (
                <iframe className="video-item" width="560" height="315" src={videoEmbedUrl} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            )
        } else {
            return (
                <Image src={videoThumbnail} alt={`${title} video thumbnail`} className="ratio-item" width={1920} height={1080} />
            )
        }
    }

    const fadeUp = (element: string) => {
        gsap.fromTo(
            element,
            { y: 100, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 1, delay: 1 }
        )
    }

    useEffect( () => {
        setWindowLoad(true);
        fadeUp('.home-banner__title');
        fadeUp('.home-banner__desc');
    }, [])

    return (
        <div className="home-banner">
            <div className="home-banner__image-container">
                {bannerContent()}
                <div className="home-banner__text-container">
                    <div className="container">
                        <h1 className="home-banner__title">
                            {title}
                        </h1>
                        <p className="home-banner__desc">
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner;