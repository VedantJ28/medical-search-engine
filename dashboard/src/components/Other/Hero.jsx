import "./Hero.css";

export const Hero = () => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <sapn className= "welcome">Welcome to </sapn><span className="head">Medico</span>
                        <p>Medico is your comprehensive medical search engine, designed to provide you with accurate and reliable information at your fingertips. Whether you're curious about a particular disease, its symptoms, or the medications commonly used for treatment, Medico offers a user-friendly platform to search and discover. To make your healthcare journey even more convenient, Medico also features a locator for nearby medical stores where you can find the prescribed medications. With Medico, you're empowered to make informed decisions about your health, ensuring you have access to the resources you need, when you need them.</p>
                        {/* <button className="get-started-btn">Get Started</button> */}
                    </div>
                </div>
                <div className="hero-image">
                    <img src="./medicine.png" alt="Hero Image" />
                </div>
            </div>
        </>
    )
}
