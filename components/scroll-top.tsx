"use client"
import React from 'react'
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
const ScrollTop = () => {
    const pathname = usePathname();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])
    return (
        <>

        </>
    )
}

export default ScrollTop