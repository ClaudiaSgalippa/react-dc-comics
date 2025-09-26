import facebook from "../img/footer-facebook.png";
import twitter from "../img/footer-twitter.png";
import youtube from "../img/footer-youtube.png";
import pinterest from "../img/footer-pinterest.png";
import periscope from "../img/footer-periscope.png";

const MyFooter = () => {
    
    return (
        <>
            <footer>
                <div className="footerLeft">
                    <a href="#"><button>SIGN-UP NOW!</button></a>
                </div>
                <div className="footerRight">
                    <span>FOLLOW US</span>
                    <a href="#"><img src={facebook} alt="Facebook"></img></a>
                    <a href="#"><img src={twitter} alt="Twitter"></img></a>
                    <a href="#"><img src={youtube} alt="YouTube"></img></a>
                    <a href="#"><img src={pinterest} alt="Pinterest"></img></a>
                    <a href="#"><img src={periscope} alt="Periscope"></img></a>
                </div>
            </footer>
        </>
    )
    
}

export default MyFooter