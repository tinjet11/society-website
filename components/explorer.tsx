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
    id: 1,
  },
  {
    name: 'about.html',
    path: '/about-us',
    icon: 'html_icon.svg',
    icons: <Users />,
    id: 2
  },
  {
    name: 'contact.css',
    path: '/contact-us',
    icon: 'css_icon.svg',
    icons: <Mail />,
    id: 3
  },
  {
    name: 'events.js',
    path: '/events',
    icon: 'js_icon.svg',
    icons: <CalendarDays />,
    id: 4
  },
];

const Explorer = () => {
  const [mainOpen, setMainOpen] = useState(true);
  const [eventOpen, setEventOpen] = useState(true);

  return (
    <div className="bg-[#363451] w-[250px] text-gray-300 font-source-sans-pro font-normal title-bar-text h-screen hidden sm:block border-r-2 border-[#4A4772]">
      {/*  <div className="bg-[#595681] w-[200px] text-gray-300 font-source-sans-pro ml-[70px] top-8 fixed title-bar-text h-full hidden sm:block flex-1"> */}
      <p className="py-2 px-3 font-light uppercase text-sm tracking-wider mb-3">Explorer</p>
      <div>
        <input
          type="checkbox"
          className="checkbox absolute opacity-0 z-[-1]"
          id="portfolio-checkbox"
          checked={mainOpen}
          onChange={() => setMainOpen(!mainOpen)}
        />
        <label htmlFor="portfolio-checkbox" className="uppercase font-bold text-xs tracking-wider flex items-center cursor-pointer px-2">
          <ChevronRight
            className="transition-transform duration-200"
            style={mainOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          UNM CSS
        </label>
        <div
          className={`py-2 cursor-pointer ${mainOpen ? 'block' : 'hidden'}`}
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

          <input
            type="checkbox"
            className="absolute opacity-0 z-[-1]"
            id="event-checkbox"
            checked={eventOpen}
            onChange={() => setEventOpen(!eventOpen)}
          />
          <label htmlFor="event-checkbox" className="uppercase font-bold text-xs tracking-wider flex items-center cursor-pointer px-3 ml-1">
            <ChevronRight
              className="transition-transform duration-200"
              style={eventOpen ? { transform: 'rotate(90deg)' } : {}}
            />
            <p className='ml-2'>Event</p>
          </label>
          <div
            className={`py-2 cursor-pointer ${eventOpen ? 'block' : 'hidden'}`}
          >
              <Link href='/events'>
                <div className="ml-5 py-1 px-4 flex items-center text-xs">
                  <Image
                    src={`js_icon.svg`}
                    alt={'event'}
                    height={18}
                    width={18}
                  />{' '}
                  <p className='p-1 ml-2'>upcomingevent.js</p>
                </div>
              </Link>
              <Link href='/events'>
                <div className="ml-5 py-1 px-4 flex items-center text-xs">
                  <Image
                    src={`js_icon.svg`}
                    alt={'event'}
                    height={18}
                    width={18}
                  />{' '}
                  <p className='p-1 ml-2'>previousevent.js</p>
                </div>
              </Link>
              <Link href='/events'>
                <div className="ml-5 py-1 px-4 flex items-center text-xs">
                  <Image
                    src={`js_icon.svg`}
                    alt={'event'}
                    height={18}
                    width={18}
                  />{' '}
                  <p className='p-1 ml-2'>blog.js</p>
                </div>
              </Link>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;    