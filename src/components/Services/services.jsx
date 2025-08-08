import './services.css'
import { PiCallBellFill } from "react-icons/pi";


const Services = () => {
    return ( 
        <>
            <div className="services-container" id="services">


                <div className="text-container">

                    <div className="main-text">
                        <span>Our Services</span>
                    </div>

                    <div className="sub-text">
                        <span>Transforming urban mobility with fast, eco-friendly, <br />and customer-focused delivery solutions</span>
                    </div>
                </div>


                <div className="cards-container">


                    <div className="cards card-1">

                        <div className="icon-1">
                            <span><img src="./Cards/bell.png" alt="" /></span>
                        </div>

                        <div className="card-main-text">
                            <span>Food Delivery</span>
                        </div>

                        <div className="card-sub-text">
                            <span>Get quick, affordable food delivery from <br /> favorite restaurants—just message <br />us on WhatsApp.</span>
                        </div>
                    </div>


                    <div className="cards card-2">

                        <div className="icons-2-3 icon-2">
                            <span><img src="./Cards/checklist.png" alt="" /></span>
                        </div>

                        <div className="card-main-text">
                            <span>Customized Service Delivery</span>
                        </div>

                        <div className="card-sub-text">
                            <span>Need something specific? From <br />groceries to gifts, our customized <br />delivery service is here for you. Chat <br />with an agent to arrange your delivery.</span>
                        </div>
                    </div>


                    <div className="cards card-3">

                        <div className="icons-2-3 icon-3">
                            <span><img src="./Cards/bus.png" alt="" /></span>
                        </div>

                        <div className="card-main-text">
                            <span>Logistics Services</span>
                        </div>

                        <div className="card-sub-text">
                            <span>Sending or receiving an item? Our fast, <br />reliable logistics service handles it all—<br />just make a request.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Services;