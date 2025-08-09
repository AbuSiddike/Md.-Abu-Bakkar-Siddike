import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

function Home() {
    return (
        <>
            <Hero />
            <AboutMe />
            <Projects />
            <Skills />
            <Resume />
            <Contact />
        </>
    );
}

export default Home;
