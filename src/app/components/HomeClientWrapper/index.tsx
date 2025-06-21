"use client"
import { useLayoutEffect, useState } from "react";
import LoadingAnimation from "../LoadingAnimation";
import NavBar from "../NavBar";
import BackToTop from "../BackToTopButton";

export default function HomeClientWrapper({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState<boolean>(false);
    const [home, setHome] = useState<boolean>(false);

    useLayoutEffect(() => {
        if (window.location.hash.length > 0) {
            setHome(true)
        }
        else {
            setLoading(true);
        }
    }, [])

    return (
        <>
            {loading && <LoadingAnimation onComplete={() => {
                setLoading(false);
                setHome(true);
            }} onClick={() => {
                setLoading(false);
                setHome(true);
            }} />}
            {home && <NavBar home />}
            {home && <BackToTop />}
            {children}
        </>
    );
} 