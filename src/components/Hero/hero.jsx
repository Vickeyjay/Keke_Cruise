import './hero.css'


const Hero = () => {
    return ( 
        <>
            <div className="hero-bg" id='home'>
                <div className="text-container">
                    <div className="main-text">
                        <span>Affordable Rides, Shared Smiles</span>
                    </div>

                    <div className="sub-text">
                        <span>Fast, reliable, and eco-friendly services—whether it’s a ride, <br />a meal, or a delivery, we’ve got you covered</span>
                    </div>

                    <div className="cta-btn-container">
                        <button ><a href="#">Contact Us</a></button>
                    </div>
                </div>




                {/* --------- CAROUSEL SLIDES ------------- */}
            
                <div className="slider">

                    <div className="slide-track">

                        <div className="slide">
                            <img src="./Carousel/carousel-1.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-2.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-3.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-4.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-5.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-6.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-7.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-8.jpg" alt="This is an image" />
                        </div>


                        {/* -------------- Carousel Doubled --------------- */}

                        <div className="slide">
                            <img src="./Carousel/carousel-1.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-2.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-3.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-4.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-5.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-6.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-7.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-8.jpg" alt="This is an image" />
                        </div>




                        {/* ---------------- Carousel Trippled --------------- */}

                         <div className="slide">
                            <img src="./Carousel/carousel-1.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-2.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-3.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-4.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-5.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-6.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-7.jpg" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./Carousel/carousel-8.jpg" alt="This is an image" />
                        </div>


                    </div>
                </div>

                
            </div>
        </>
     );
}
 
export default Hero;