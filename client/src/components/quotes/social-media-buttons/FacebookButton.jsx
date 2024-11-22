import styles from './FacebookButton.module.scss'
import { FacebookShareButton, FacebookIcon } from "react-share";
import { useLocation } from "react-router-dom";
import { useState } from 'react';

const FaceBookShareButton = () => {

    const location = useLocation();
    const shareUrl = `https://book-hub.fanerotim.com${location.pathname}`

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover((isHover) => !isHover);
    }
    
    const handleMouseLeave = () => {
        setIsHover((isHover) => !isHover)
    }

    return (
        <section className={styles.socialButtonsWrapper}>
            <h2 className={styles.socialMediaHeading}>Pass it on</h2>
            <FacebookShareButton 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                url={shareUrl}>
                <FacebookIcon
                    className={styles.facebookIcon}
                    size={20}
                    round={true}

                    iconFillColor={isHover 
                                    ? 'black' 
                                    : 'white'}
                />       
            </FacebookShareButton>
        </section>
    )
}

export default FaceBookShareButton;