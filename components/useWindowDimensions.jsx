import { useState, useEffect } from "react";

export default function useWindowDimensions() {
    const hasWindow = typeof window !== "undefined" && window;

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : 800;
        const height = hasWindow ? window.innerHeight : 800;
        return {
            width,
            height,
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return windowDimensions;
}
