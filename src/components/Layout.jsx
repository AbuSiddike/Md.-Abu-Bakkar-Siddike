import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    return (
        <div className="bg-base-100 text-base-content">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Layout;
