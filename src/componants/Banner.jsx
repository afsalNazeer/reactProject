import "../assets/css/main.css"
import { Link } from 'react-router-dom';
import bannerImage1 from '../assets/images/banner/img1.png';
import bannerImage2 from '../assets/images/banner/img2.png';
import bannerImage3 from '../assets/images/banner/img3.png';
import bannerImage4 from '../assets/images/banner/img4.png';
import Buttons from "../includes/buttons/button";

function HomeBanner(){
    return (
        <header id="homeBanner">
            <article className="container">
                <article className="bannerMain">
                    <h1>Our Unique Care Philosophy is designed for your whole health</h1>
                    <p>Our physician-led interdisciplinary team takes an integrated whole-health approach, focusing on the root causes of your condition for sustainable long-term relief and overall wellness.</p>
                    <article className="bannerBtnArea">
                        <Link to="/Contact" className="bannerContactBtn">Contact Now</Link>
                        <Buttons cls="bannerBookBtn" title="Book a Consultation"></Buttons>
                    </article>
                    <article className="bannerThumbnail">
                        <article className="bannerThumbnailBox">
                            <img src={bannerImage1} alt="Description of My Image" />
                        </article>
                        <article className="bannerThumbnailBox">
                            <img src={bannerImage2} alt="Description of My Image" />
                        </article>
                        <article className="bannerThumbnailBox">
                            <img src={bannerImage3} alt="Description of My Image" />
                        </article>
                        <article className="bannerThumbnailBox">
                            <img src={bannerImage4} alt="Description of My Image" />
                        </article>
                    </article>
                </article>
            </article>
        </header>
    );
}

export default HomeBanner;