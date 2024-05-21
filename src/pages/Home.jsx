import HomeBanner from "../componants/Banner.jsx"
import HomeAbout from "../componants/HomeAbout.jsx";
import HomeService from "../componants/HomeService.jsx";

function Home(){
    return (
        <>
        <HomeBanner></HomeBanner>
        <HomeAbout></HomeAbout>
        <HomeService></HomeService>
        </>
    );
}

export default Home;