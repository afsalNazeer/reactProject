import "../assets/css/main.css";
import "../assets/css/style.css"
import { Link } from 'react-router-dom';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';

function HomeAbout(){
    return (
        <section id="homeAbout">
            <article className="container">
                <article className="homeAboutMain">
                    <article className="homeAboutDetails">
                        <h2>Why we are better than others</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facere aliquid labore illum optio perferendis voluptatibus magnam repudiandae, alias asperiores. Sapiente excepturi laborum sequi fuga, magnam alias animi aut. Corporis.</p>
                        <Link to="/About">View More</Link>
                    </article>
                    <article className="homeAboutPoints">
                        <article className="homeAboutPointsBox">
                            <article className="homeAboutPointsBoxIcon">
                                <LocalHospitalOutlinedIcon></LocalHospitalOutlinedIcon>
                            </article>
                            <h3>Physician-led Care</h3>
                            <p>For evidence-based care that is guided by our highly qualified and experienced doctors.</p>
                        </article>
                        <article className="homeAboutPointsBox">
                            <article className="homeAboutPointsBoxIcon">
                                <DocumentScannerOutlinedIcon></DocumentScannerOutlinedIcon>
                            </article>
                            <h3>Advanced Diagnostics</h3>
                            <p>So that we identify the root causes of your health condition and reach a precise diagnosis, swiftly.</p>
                        </article>
                        <article className="homeAboutPointsBox">
                            <article className="homeAboutPointsBoxIcon">
                                <Diversity1OutlinedIcon></Diversity1OutlinedIcon>
                            </article>
                            <h3>Interdisciplinary Team</h3>
                            <p>To get a well-rounded perspective on your health condition so that your care plan is precise and gets you real results.</p>
                        </article>
                        <article className="homeAboutPointsBox">
                            <article className="homeAboutPointsBoxIcon">
                                <SpaOutlinedIcon></SpaOutlinedIcon>
                            </article>
                            <h3>Health Coaches</h3>
                            <p>To ensure that you have consistent support, guidance, & motivation to meet your health goals.</p>
                        </article>
                    </article>
                </article>
            </article>
        </section>
    );
}

export default HomeAbout;