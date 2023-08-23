"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { explorerItems } from './explorer';

interface Props {
    name: string;
    path: string;
    icon: string;
    id: number;
}


const TabComponent = ({ name, path, icon, id}: Props) => {
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(true);

    const handleCloseTab = (id: number) => {
        explorerItems[id].isOpen = false;
        setOpen(false);

        const nextTab = explorerItems.find(item => item.isOpen === true);

        if (nextTab) {
            router.push(nextTab.path);
        } else {
            router.push('/default');
        }
    }

    useEffect(() => {
        if (pathname == path) {
            setOpen(true);
        }
    }, [pathname])

    return (
        <>
            {open && (
                <div key={name} className={`flex items-center text-sm ${pathname === path ? 'content-color border-t-2 border-[#E981D9]' : 'secondary-bg-color'} flex-shrink-0`}>
                    <Link href={path} className='mr-3'>
                        <div className='py-3 px-3 flex items-center text-sm'>
                            <Image
                                src={`/${icon}`}
                                alt={name}
                                height={18}
                                width={18}
                                className='hidden md:block'
                            />
                            <p className='ml-[5px]'>{name}</p>
                        </div>

                    </Link>
                    <button className='md:block hidden' onClick={() => handleCloseTab(id)}>
                        <X className='mr-3 h-4 w-4' />
                    </button>
                </div>
            )}
        </>
    )
}

export default TabComponent