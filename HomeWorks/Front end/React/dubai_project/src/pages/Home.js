
import ContactUs from "../components/contactUs";
import Header from "../components/header/Header";
import LatestProject from "../components/latestProject";
import OurExpertise from "../components/ourExpertise";
import Projects from "../components/projects";
import Slider from "../components/slider/Slider";
import Video from "../components/video";
function Home () {
    return (
        <>
            <Header />
            <Slider />
            <LatestProject />
            <OurExpertise />
            <Video />
            <Projects />
            <ContactUs />
        </>
    )
}

export default Home;