/* "use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { explorerItems } from './explorer';
import { X } from 'lucide-react';

const Tab = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<{ [key: number]: boolean }>({});
  const [currentPathName, setCurrentPathName] = useState('');

  useEffect(() => {
    router.push(currentPathName);
  }, [currentPathName]);

  // Initialize isOpen state based on explorerItems
  useEffect(() => {
    const initialIsOpen: { [key: number]: boolean } = {};
    explorerItems.forEach((item) => {
      initialIsOpen[item.id] = true;
    });
    setIsOpen(initialIsOpen);
  }, []);

  useEffect(() => {
    const matchingItem = explorerItems.find((item) => item.path === pathname);

    setCurrentPathName(pathname)

    if (matchingItem) {
      setIsOpen((prevOpen) => ({
        ...prevOpen,
        [matchingItem.id]: true,
      }));
    }

  }, [pathname]);

  const handleCloseTab = (itemId: number) => {
    setIsOpen((prevOpen) => ({
      ...prevOpen,
      [itemId]: false, // Mark the corresponding tab as closed
    }));

    const nextTab = explorerItems.find((item) => item.id !== itemId && isOpen[item.id]);

    if (nextTab) {
      setCurrentPathName(nextTab.path)
    } else {
      setCurrentPathName('/default')
    }
  };

  useEffect(() => {
    router.push(currentPathName);
  }, [currentPathName]);




  return (
    <div className='tabs title-bar-text pr-2 flex secondary-bg-color overflow-x-auto'>
      <div className="cursor-pointer flex">
        {explorerItems.map((item) =>
          isOpen[item.id] && (
            // Only render the tab if isOpen is true for that item's id
            <div key={item.name} className={`flex items-center text-sm ${pathname === item.path ? 'content-color border-t-2 border-[#E981D9]' : 'secondary-bg-color'} flex-shrink-0`}>
              <Link href={item.path} className='mr-3'>
                <div className='py-3 px-3 flex items-center text-sm'>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                  className='hidden md:block'
                />
                <p className='ml-[5px]'>{item.name}</p>
                </div>
               
              </Link>
              <button className='md:block hidden' onClick={() => handleCloseTab(item.id)}>
                <X className='mr-3 h-4 w-4' />
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Tab;
 */

"use client"
import React from 'react';
import { explorerItems } from './explorer';
import TabComponent from './tab-component';
import { consolas } from '@/app/layout';

export const revalidate = 0;
const Tab = () => {

  return (
    <div className={`${consolas.className}  tabs title-bar-text pr-2 flex secondary-bg-color overflow-x-auto`}>
      <div className="cursor-pointer flex">
        {explorerItems.map((item) =>
        (
          <TabComponent key={item.id} name={item.name} path={item.path} icon={item.icon} id={item.id} />
        )
        )}
      </div>
    </div>
  );
};

export default Tab;