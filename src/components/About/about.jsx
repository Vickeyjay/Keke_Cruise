import './about.css'


const About = () => {
    return ( 
        <>
            <div className="about-container" id='about'>


                <div className="contents-container">


                    <div className="text-container">

                        <div className="main-text">
                            <span>About Us</span>
                        </div>

                        <div className="sub-text">
                            <span>Keke Cruise is a fast and reliable service start up committed to making daily life easier. We specialize in food delivery, logistics, and customized services, ensuring convenience at every step. Our mission is simple: to provide seamless, eco-friendly solutions that connect you with what matters most-quickly, efficiently, and sustainably.</span>
                        </div>

                        <div className="btn-container">
                            <button ><a href="#">Book a Service Now</a></button>
                        </div>
                    </div>


                    <div className="img-container">
                        <span><img src="./About/about.jpg" alt="An image should be here." /></span>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default About;