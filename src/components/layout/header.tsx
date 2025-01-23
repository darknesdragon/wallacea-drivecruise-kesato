"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import AppButton from "@ui/AppButton";
import IconCLose from "@icon/close";

import "@styles/components/layout/_header.scss";

const menuData = [
    {
        name: 'Home',
        link: '#'
    },
    {
        name: 'Destinations',
        link: '#'
    },
    {
        name: 'Boats',
        link: '#'
    },
    {
        name: 'Rates & Schedule',
        link: '#'
    },
    {
        name: 'Gallery',
        link: '#'
    },
    {
        name: 'About',
        link: '#'
    },
    {
        name: 'Blog',
        link: '#'
    },
    {
        name: 'Faqs',
        link: '#'
    }
]

const Header = () => {
    
    const [scrolled, setScrolled] = useState(false);
    const navbarClass = scrolled? 'web-header__navbar--scrolled' : 'web-header__navbar';
    const logoImage = scrolled? '/images/logo-gold.svg' : '/images/logo-white.svg';

    useEffect( () => {
        window.addEventListener('scroll', () => {
            if ( window.scrollY > 30 ) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        })
    } , [] );

    const navItemLoop = menuData.map( (item, index) => {
        return (
            <li className="nav-item" key={index}>
                <a className="nav-link web-header__nav-link" aria-current="page" href={item.link}>
                    {item.name}
                </a>
            </li>
        )
    });

    return (
        <header className="web-header">
            <nav className={`navbar navbar-expand-lg fixed-top ${navbarClass}`}>
                    <div className="web-header__navbar-top">
                        <div className="container">
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span className="hamburger-line"></span>
                                <span className="hamburger-line"></span>
                                <span className="hamburger-line"></span>
                            </button>
                            <div className="web-header__language-container">
                                <div className="web-header__info-container">
                                    <div className="web-header__flag-container">
                                        <Image src="/images/flag-english.png" alt="Englsih Flag" className="ratio-item" width={20} height={20} />
                                    </div>
                                </div>
                                <div className="web-header__info-container">
                                    <p className="web-header__currency">
                                        USD
                                    </p>
                                </div>
                                <div className="web-header__info-container--google">
                                    <div className="web-header__google-logo-container">
                                        <Image src="/images/logo-google.png" alt="Google G logo" className="ratio-item" width={20} height={20} />
                                    </div>
                                    <p className="web-header__google-text">
                                        <span className="web-header__google-rating">5.0</span>
                                        <span className="web-header__google-rating-count">2302 Review</span>
                                    </p>
                                </div>
                            </div>
                            <a className="navbar-brand web-header__logo-container" href="#">
                                <Image src={logoImage} alt="Wallacea Divecruise Logo" className="ratio-item" width={58} height={44} />
                            </a>
                            <div className="web-header__cta-container">
                                <AppButton buttonType="navigation" buttonVariation="gold">
                                    Enquire
                                </AppButton>
                            </div>
                        </div>
                    </div>
                    <div className="web-header__navbar-bottom">
                        <div className="container">
                            <div className="offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                                        <IconCLose />
                                    </button>
                                    <div className="web-header__logo-container">
                                        <Image src="/images/logo-white.svg" alt="Wallace Divecruise Logo" className="ratio-item" width={58} height={44} />
                                    </div>
                                </div>
                                <div className="offcanvas-body justify-content-lg-center">
                                    <ul className="navbar-nav justify-content-center">
                                        {navItemLoop}
                                    </ul>
                                    <div className="web-header__offcanvas-google-rating web-header__info-container--google">
                                        <div className="web-header__google-logo-container">
                                            <Image src="/images/logo-google.png" alt="Google G logo" className="ratio-item" width={20} height={20} />
                                        </div>
                                        <p className="web-header__google-text">
                                            <span className="web-header__google-rating">5.0</span>
                                            <span className="web-header__google-rating-count">2302 Review</span>
                                        </p>
                                    </div>
                                    <AppButton buttonType="navigation" buttonVariation="gold" additionalClasses="web-header__offcanvas-navigation-button">
                                        Enquire
                                    </AppButton>
                                </div>
                            </div>
                        </div>
                    </div>
            </nav>
        </header>
    )
}

export default Header;