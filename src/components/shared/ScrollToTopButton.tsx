"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { MoveUp } from "lucide-react";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    // Show button after scrolling down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`fixed bottom-8 right-0 transform  transition-all duration-300 ${visible ? "-translate-x-6 opacity-100" : "translate-x-full opacity-0"
                }`}
        >
            <Button
                onClick={scrollToTop}
                className="bg-primary text-white w-12 h-12 flex items-center justify-center shadow-md rounded-xl hover:bg-primary/80"
                aria-label="Scroll to top"
            >
                <MoveUp size={32} />
            </Button>
        </div>
    );
}
