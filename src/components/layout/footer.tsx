import Image from "next/image";

import IconYoutube from "@icon/youtube";
import IconInstagram from "@icon/instagram";
import IconFacebook from "@icon/facebook";
import IconLinkedin from "@icon/linkedin";
import IconPhone from "@icon/phone";
import IconMail from "@icon/mail";

import "@styles/components/layout/_footer.scss";

const footerMenu = [
    { 
        name: 'Diving Rules', 
        link: '#' 
    },
    { 
        name: 'Onboard Prices', 
        link: '#' 
    },
    { 
        name: 'Travel Agent List', 
        link: '#' 
    },
    { 
        name: 'T&c', 
        link: '#' 
    },
    { 
        name: 'Tompotika Dive Lodge', 
        link: '#' 
    },
];

const socialMenu = [
    {
        name: 'Youtube',
        link: '#'
    },
    {
        name: 'Facebook',
        link: '#'
    },
    {
        name: 'Linkedin',
        link: '#'
    },
    {
        name: 'Instagram',
        link: '#'
    },
]

const footerInfo = {
    phone: '+62 81246373025',
    mail: 'info@wallacea-divecruise.com'
}

const Footer = () => {

    const footerMenuLoop = footerMenu.map( (item, index) => {
        return (
            <li key={index} className="web-footer__footer-menu-item">
                <a href={item.link} className="web-footer__footer-menu-link">
                    {item.name}
                </a>
            </li>
        )
    });

    const footerPhone = footerInfo.phone.replace(' ', '');

    const socialMenuLoop = socialMenu.map( (item, index) => {

        let IconElement;

        switch (item.name) {
            case 'Youtube':
                IconElement = <IconYoutube className="web-footer__social-icon" />
                break;
            case 'Facebook':
                IconElement = <IconFacebook className="web-footer__social-icon" />
                break;
            case 'Linkedin':
                IconElement = <IconLinkedin className="web-footer__social-icon" />
                break;
            case 'Instagram':
                IconElement = <IconInstagram className="web-footer__social-icon" />
                break;
        }

        return (
            <a href={item.link} key={index} className="web-footer__social-link">
                {IconElement}   
            </a>
        )
    });

    return (
        <footer>
            <div className="web-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 text-center text-lg-start">
                            <div className="web-footer__logo-container">
                                <Image src="/images/logo-white.svg" alt="Logo" className="ratio-item" width={160} height={121} />
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="web-footer__footer-menu-container">
                                <nav className="web-footer__footer-nav">
                                    <ul className="web-footer__footer-menu">
                                        {footerMenuLoop}
                                    </ul>
                                </nav>
                                <div className="web-footer__social-container">
                                    <p className="web-footer__social-text">
                                        Follow us :
                                    </p>
                                    {socialMenuLoop}
                                </div>
                            </div>
                            <div className="web-footer__footer-info-container">
                                <div className="web-footer__footer-info">
                                    <a href={`tel:${footerPhone}`} className="web-footer__footer-info-link">
                                        <IconPhone className="web-footer__footer-icon" />
                                        {footerInfo.phone}
                                    </a>
                                    <a href={`mailto:${footerInfo.mail}`} className="web-footer__footer-info-link">
                                        <IconMail className="web-footer__footer-icon" />
                                        {footerInfo.mail}
                                    </a>
                                </div>
                                <div className="web-footer__further-ease">
                                    <p className="web-footer__further-ease-text">
                                        Affiliated with
                                    </p>
                                    <div className="web-footer__further-ease-logo-container">
                                        <Image src="/images/further-ease-logo.svg" alt="Logo" className="ratio-item" width={160} height={121} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-auto">
                            <p className="footer-copyright__text">
                                © 2024 Hello Indonesia. Web Design & Development by Kesato & Co.
                            </p>
                        </div>
                        <div className="col-12 col-lg-auto d-none d-lg-block">
                            <p className="footer-copyright__text">
                                The legal currency of trade in Indonesia is the Rupiah
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;