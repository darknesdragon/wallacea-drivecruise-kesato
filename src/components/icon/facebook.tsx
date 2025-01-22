type IconFacebookProps = {
    className?: string;
}

const IconFacebook = ({className} : IconFacebookProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-7 -2 24 24"><path fill="currentColor" d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865"/></svg>
    )
}

export default IconFacebook