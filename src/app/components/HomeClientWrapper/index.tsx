"use client"
import React, { useLayoutEffect, useState, useEffect, ReactNode, isValidElement, cloneElement } from "react";
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

    const childrenWithLoading = React.Children.map(children, (child, idx) =>
        isValidElement(child)
            ? cloneElement(child as React.ReactElement<any>, {
                loadingComplete: !isLoading,
                key: (!isLoading ? 'loaded' : 'loading') + '-' + idx
            })
            : child
    );

    return (
        <>
            <NavBar home />
            <BackToTop />
            {childrenWithLoading}
            {isLoading && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100dvw',
                    height: '100dvh',
                    zIndex: 9999,
                    background: 'rgba(16,16,16,0.98)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <LoadingAnimation onComplete={handleLoadingComplete} onClick={handleLoadingComplete} />
                </div>
            )}
        </>
    );
} 