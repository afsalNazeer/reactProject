import HomeBanner from "../componants/Banner.jsx"
import HomeAbout from "../componants/HomeAbout.jsx";
import HomeService from "../componants/HomeService.jsx";

function About(){
    return (
        <>
        <HomeService></HomeService>
        <HomeBanner></HomeBanner>
        <HomeAbout></HomeAbout>
        </>
    );
}

export default About;