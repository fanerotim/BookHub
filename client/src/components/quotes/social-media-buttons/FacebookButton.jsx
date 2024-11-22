import { FacebookShareButton, FacebookIcon } from "react-share";
import { useLocation } from "react-router-dom";

const FaceBookShareButton = () => {

    const location = useLocation();
    const shareUrl = `https://book-hub.fanerotim.com${location.pathname}` 

    return (
        <>
            <FacebookShareButton url={shareUrl}>
                <FacebookIcon
                    size={25}
                    round={true} />
            </FacebookShareButton>
        </>
    )
}

export default FaceBookShareButton;