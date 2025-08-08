import React from "react";
import "./why.css";

const Why = () => {
  return (
    <>
        <div className="why-container" id="why">


            <div className="text-container">


                <div className="main-text">
                    <span>Why Choose Us</span>
                </div>

                <div className="sub-text">
                    <span>Your convenience, our priority—seamless rides, swift <br />deliveries, and personalized services you can trust</span>
                </div>
            </div>


            <div className="why-card-container">


                <div className="why-cards bg-dark rotate-right">
                    <div className="why-icon"><img src="./whyIcons/tag.png" alt="" /></div>
                    

                    <div className="why-text-container">

                        <div className="why-main-text">
                        <span>Affordable</span>
                    </div>

                    <div className="why-sub-text">
                        <span>Our pricing model ensures that you can enjoy our delivery services at pocket-friendly rates, making us the best choice for food, customized service delivery, and logistics.</span>
                    </div>
                    </div>
                    
                </div>


                <div className="why-cards bg-gold rotate-left">
                    <div className="why-icon"><img src="./whyIcons/leaf.png" alt="" /></div>
                    

                    <div className="why-text-container">

                        <div className="why-main-text">
                        <span>Eco-Friendly</span>
                    </div>

                    <div className="why-sub-text">
                        <span>We are proud to support a greener future by using bicycles for all our delivery services. This ensures we reduce carbon emissions while promoting sustainability—no matter where you are.</span>
                    </div>
                    </div>
                    
                </div>


                <div className="why-cards bg-gold rotate-left">
                    <div className="why-icon"><img src="./whyIcons/heart.png" alt="" /></div>
                    

                    <div className="why-text-container">
                        <div className="why-main-text">
                        <span>Healthy</span>
                    </div>

                    <div className="why-sub-text">
                        <span>We prioritize wellness—not just for our riders, but also for the planet. By using bicycles, we promote an active and healthy lifestyle while contributing to a cleaner environment</span>
                    </div>
                    </div>
                    
                </div>


                <div className="why-cards bg-dark rotate-right">
                    <div className="why-icon"><img src="./whyIcons/check.png" alt="" /></div>
                    

                    <div className="why-text-container">

                        <div className="why-main-text">
                        <span>Convenient</span>
                    </div>

                    <div className="why-sub-text">
                        <span>With a user-friendly booking process via whatsapp (for now), KekeCruise ensures you can get what you need, when you need it. Whether it's ordering food, requesting a tailored service, or arranging logistics, our system makes it quick and easy</span>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  );
};

export default Why;
