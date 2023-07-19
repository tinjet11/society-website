'use client'

import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    //prevent hydration error
    if (!isMounted) {
        return null;
    }
    return <ThemeProvider defaultTheme='dark'>{children}</ThemeProvider>
}