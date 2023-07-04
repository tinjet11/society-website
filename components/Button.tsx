"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
    text: string;
    path: string;
};

const Button = ({ text, path }: Props) => {
    const router = useRouter();

    function handleClick() {
        router.push(path);
    }

    return (
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-3 rounded text-sm" onClick={handleClick}>
            {text}
        </button>
    );
};

export default Button;
