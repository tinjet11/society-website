"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ChevronRight from '../components/icons/ChevronRight';
import styles from '../styles/Explorer.module.css';
import { CalendarDays, Edit3, Home, Mail, Users } from 'lucide-react';

export const explorerItems = [
  {
    name: 'home.jsx',
    path: '/',
    icon: 'react_icon.svg',
    icons: <Home />,
  },
  {
    name: 'about.html',
    path: '/about-us',
    icon: 'html_icon.svg',
    icons: <Users />,
  },
  {
    name: 'contact.css',
    path: '/contact-us',
    icon: 'css_icon.svg',
    icons: <Mail />,
  },
  {
    name: 'events.js',
    path: '/events',
    icon: 'js_icon.svg',
    icons: <CalendarDays />,
  },
  {
    name: 'blogs.json',
    path: '/blog',
    icon: 'json_icon.svg',
    icons: <Edit3 />,
  },
  {
    name: 'blogs.json',
    path: '/blog',
    icon: 'json_icon.svg',
    icons: <Edit3 />,
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className="w-[200px] text-gray-300 font-source-sans-pro title-bar-text h-screen hidden sm:block border-r border-[#4A4772]">
      {/*  <div className="bg-[#595681] w-[200px] text-gray-300 font-source-sans-pro ml-[70px] top-8 fixed title-bar-text h-full hidden sm:block flex-1"> */}
      <p className="py-2 px-3 font-light uppercase text-sm tracking-wider mb-3">Explorer</p>
      <div>
        <input
          type="checkbox"
          className="checkbox absolute opacity-0 z-[-1]"
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className="uppercase font-bold text-xs tracking-wider flex items-center cursor-pointer px-2">
          <ChevronRight
            className="transition-transform duration-200"
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          UNM CSS
        </label>
        <div
          className="py-2 cursor-pointer"
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className="py-1 px-4 flex items-center text-xs">
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />{' '}
                <p className='p-1 ml-2'>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;    