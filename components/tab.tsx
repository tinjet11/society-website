"use client"
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
  const [currentPathName, setCurrentPathName] = useState('/');

  useEffect(() => {
    router.push(currentPathName);
  }, [currentPathName]);

  // Initialize isOpen state based on explorerItems
  useEffect(() => {
    const initialIsOpen: { [key: number]: boolean } = {};
    explorerItems.forEach((item) => {
      initialIsOpen[item.id] = true; // All tabs are initially open
    });
    setIsOpen(initialIsOpen);
  }, []);

  // Update isOpen state when pathname changes
  useEffect(() => {
    const matchingItem = explorerItems.find((item) => item.path === pathname);

    if (matchingItem) {
      // If a matching item is found, update the isOpen state with its id
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

    }

  };



  return (
    <div className='tabs pr-2  mb-4  flex primary-bg-color overflow-x-auto'>
      <div className="cursor-pointer flex space-x-4">
        {explorerItems.map((item) =>
          isOpen[item.id] && (
            // Only render the tab if isOpen is true for that item's id
            <Link href={item.path} key={item.name}>
              <div className={`w-full py-3 px-3 flex items-center text-sm ${pathname === item.path ? 'bg-[#363451] border-t-2 border-[#E981D9]' : 'primary-bg-color'} flex-shrink-0`}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                  className='hidden md:block'
                />
                <p className='ml-[5px]'>{item.name}</p>
                <button onClick={() => handleCloseTab(item.id)}>
                  <X className='ml-3 h-4 w-4' />
                </button>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Tab;
