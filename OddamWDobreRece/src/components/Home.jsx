import HomeAboutUs from "./HomeAboutUs";
import HomeHeader from "./HomeHeader";
import HomeMainSection from "./HomeMainSection";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeWhoWeHelp from "./HomeWhoWeHelp";

export default function Home () {
    return (
        <>
        <HomeHeader />
        <HomeMainSection />
        <HomeThreeColumns />
        <HomeSimpleSteps />
        <HomeAboutUs />
        <HomeWhoWeHelp />
        </>
    )
}