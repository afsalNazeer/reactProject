// src/includes/homeServiceBox/HomeServiceBox.jsx
import "../../assets/css/main.css";
import "../../assets/css/style.css";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState ,useEffect} from "react";


function HomeServiceBox({ link, servImg, servTitle, servDesc }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = servImg;
        img.onload = () => {setLoaded(true)};
    }, [servImg]);
    return (
        <Link to={link} className={`homeServiceBox ${loaded ? '' : 'loaded'}`}>
            <article className="homeServiceBoxThumbnail">
                <img src={servImg} effect="blur" alt={servTitle} />
            </article>
            <article className="homeServiceBoxDetails">
                <h3>{servTitle}</h3>
                <p>{servDesc}</p>
                <article className="homeServiceBoxBtn">Explore More</article>
            </article>
        </Link>
    );
}

export default HomeServiceBox;