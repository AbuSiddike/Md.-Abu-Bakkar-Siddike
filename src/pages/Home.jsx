import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";

function Home() {
    return (
        <>
            <Hero />
            <AboutMe />
            <Projects />
            <Skills />
            <Education />
            <Contact />
        </>
    );
}

export default Home;
