import "./footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";


const Footer = () => {
    return ( 
        <>
            <div className="footer-bg">


                <div className="footer-main-content">
                    <div className="logo-icon-container">

                    <div className="logo-container">
                        <img src="./logo.png" alt="" />
                    </div>

                    <div className="icon-container">
                        <a href="https://x.com/vickeycodes?t=7Ag3EMGoSTa6f17zk3qC1Q&s=09"><span className="icons"><FaInstagram /></span></a>
                        <a href="https://x.com/vickeycodes?t=7Ag3EMGoSTa6f17zk3qC1Q&s=09"><span className="icons"><FaXTwitter /></span></a>
                        <a href="https://x.com/vickeycodes?t=7Ag3EMGoSTa6f17zk3qC1Q&s=09"><span className="icons"><IoLogoTiktok /></span></a>
                    </div>
                </div>


                <div className="nav-links-container">
                    <span><a href="#home">Home</a></span>
                    <span><a href="#about">About Us</a></span>
                    <span><a href="#services">Our Services</a></span>
                    <span><a href="#why">Why Choose Us</a></span>
                    <span><a href="#faq">FAQ</a></span>
                </div>


                <div className="contact-container">

                    <div className="main-text">
                        <span>Contact Us</span>
                    </div>

                    <div className="sub-texts">
                        <span className="sub-icon"></span><span>Contact@kekecruise.gmail.com</span>
                        <span className="sub-icon"></span><span>+234 816 5070 331</span>
                        <span className="sub-icon"></span><span>Contact@kekecruise.gmail.com</span>
                        <span className="sub-icon"></span><span>Ilorin, Kwara State Nigeria</span>
                    </div>
                </div>
                </div>

                

                <div className="copy-right">
                   <span>&copy; 2024 kekecruise.com. All Rights Reserved</span> 
                </div>

                <div className="big-text">
                    <span>KEKECRUISE</span>
                </div>
            </div>
        </>
     );
}
 
export default Footer;