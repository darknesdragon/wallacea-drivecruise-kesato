import CaretRight from "@icon/caret-right";

import "@styles/components/ui/_app-button.scss";

type ButtonProps = {
    link? : string,
    buttonType: string,
    buttonVariation: string,
    additionalClasses?: string,
    additionalAttributes?: React.HTMLAttributes<HTMLAnchorElement>; 
    children: React.ReactNode
}

const AppButton = ({ link, buttonType, buttonVariation, additionalClasses, additionalAttributes, children }: ButtonProps) => {

    const tertiaryIcon = () => {
        if ( buttonType == 'tertiary' ) {
            return (
                <span className="app-button-tertiary__icon-container">
                    <CaretRight className="ratio-item"/>
                </span>
            )
        }
    }

    return (
        <a href={ link || '#' } className={`app-button app-button-${buttonType}--${buttonVariation} ${additionalClasses}`} {...additionalAttributes}>
            <span>
                {children}
            </span>
            {tertiaryIcon()}
        </a>
    )
}

export default AppButton;