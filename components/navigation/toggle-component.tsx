"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import ChevronRight from '../icons/ChevronRight';

interface Props {
    title: string;
    children: React.ReactNode;
    id: string;
}

const ToggleComponent = ({ title, children,id }: Props) => {
    const [open, setopen] = useState(true);
    const checkboxId = `portfolio-checkbox-${id}`;
    return (
        <>
            <input
                type="checkbox"
                className="checkbox absolute opacity-0 z-[-1]"
                id={checkboxId}
                checked={open}
                onChange={() => setopen(!open)}
            />
            <label htmlFor={checkboxId} className="uppercase font-bold tracking-wider flex items-center cursor-pointer px-2">
                <ChevronRight
                    className="transition-transform duration-200"
                    style={open ? { transform: 'rotate(90deg)' } : {}}
                />
                {title}
            </label>

            <div
                className={`py-2 cursor-pointer ${open ? 'block' : 'hidden'}`}>
                {children}
            </div>
        </>
    )
}

export default ToggleComponent