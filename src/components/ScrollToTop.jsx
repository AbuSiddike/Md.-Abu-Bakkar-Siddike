import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    // Scroll to top when route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed bottom-8 right-8">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="btn btn-circle btn-primary shadow-lg tooltip tooltip-left"
                    data-tip="Back to top"
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
