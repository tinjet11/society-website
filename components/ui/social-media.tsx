import React from 'react'
import Link from 'next/link';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';

const SocialMedia = () => {
    return (
        <>
            <Link href="https://www.instagram.com/unm.css/" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} className="text-[#E981D9]" />
            </Link>
            <Link href="https://www.facebook.com/CSSocietyUNM" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} className="text-[#E981D9]" />
            </Link>
            <Link href="https://www.linkedin.com/company/unmcss/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} className="text-[#E981D9]" />
            </Link>
            <Link href="https://github.com/UoN-Computer-Science-Society" target="_blank" rel="noopener noreferrer">
                <Github size={24} className="text-[#E981D9]" />
            </Link>
        </>
    )
}

export default SocialMedia