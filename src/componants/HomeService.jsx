import "../assets/css/main.css";
import { Link } from 'react-router-dom';
import { useState, Suspense, lazy } from 'react';
import servImg1 from "../assets/images/service/img5.jpg";
import servImg2 from "../assets/images/service/img2.jpg";
import servImg3 from "../assets/images/service/img3.jpg";
import servImg4 from "../assets/images/service/img4.jpg";
import HomeServiceBoxLoading from "../includes/loading/serviceBoxLoading";

const HomeServiceBox = lazy(() => import("../includes/homeServiceBox/homeServiceBox"));

function HomeService(){
    return (
        <section id="homeService">
            <article className="container">
                <article className="homeServiceTitle">
                    <h2>Our Treatments</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusamus molestias eveniet. Dignissimos, dolorum est.</p>
                </article>
                <article className="homeServiceMain">
                    <Suspense fallback={<HomeServiceBoxLoading />}>
                        <HomeServiceBox link="/ChronicPain" servImg={servImg1} servTitle="Chronic Pain" servDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    </Suspense>
                    <Suspense fallback={<HomeServiceBoxLoading />}>
                        <HomeServiceBox link="/ChildhoodDisabilities" servImg={servImg2} servTitle="Childhood Disabilities" servDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    </Suspense>
                    <Suspense fallback={<HomeServiceBoxLoading />}>
                        <HomeServiceBox link="/MentalBehaviouralHealth" servImg={servImg3} servTitle="Mental & Behavioural Health" servDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    </Suspense>
                    <Suspense fallback={<HomeServiceBoxLoading />}>
                        <HomeServiceBox link="/ChronicDiseaseManagement" servImg={servImg4} servTitle="Chronic Disease Management" servDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    </Suspense>
                </article>
            </article>
        </section>
    );
}

export default HomeService;
