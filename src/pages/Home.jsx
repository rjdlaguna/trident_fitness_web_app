import Navbar from "./Navbar"
import Banner from "./Banner"
import Footer from "../components/ui/Footer"
import TrainersSection from "./TrainersSection"
import WorkoutSection from "./WorkoutSection"
import ContactSection from "./ContactSection"
import AboutSection from "./AboutSection"
export default function Home() {
    return(
        <>
            <Navbar />
            <Banner />
            <TrainersSection />
            <WorkoutSection />
            <ContactSection />
            <AboutSection />
            <Footer />
        </>
    )
}