"use client"
import { useLayoutEffect, useState, useEffect } from "react";
import LoadingAnimation from "../LoadingAnimation";
import NavBar from "../NavBar";
import BackToTop from "../BackToTopButton";

export default function HomeClientWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        if (window.location.hash.length > 0) {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isLoading]);
    
    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    if (isLoading) {
        return <LoadingAnimation onComplete={handleLoadingComplete} onClick={handleLoadingComplete} />;
    }

    return (
        <>
            <NavBar home />
            <BackToTop />
            {children}
        </>
    );
} 