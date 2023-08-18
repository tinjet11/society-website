"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ChevronRight from '../icons/ChevronRight';
import { CalendarDays, Edit3, Home, Mail, Users } from 'lucide-react';
import { BlogType, EventType } from '@/types';
import getBlogs from '@/actions/getBlogs';
import getEvents from '@/actions/getEvent';

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


function useSelectedYearRanges(initialYearRanges: string[]) {
  const [selectedYearRanges, setSelectedYearRanges] = useState<{ [yearRange: string]: boolean }>(() => {
    const initialState: { [yearRange: string]: boolean } = {};
    initialYearRanges.forEach((yearRange) => {
      initialState[yearRange] = true;
    });
    return initialState;
  });


  const handleYearRangeInputChange = (yearRange: string) => {
    setSelectedYearRanges((prevSelectedYearRanges) => ({
      ...prevSelectedYearRanges,
      [yearRange]: !prevSelectedYearRanges[yearRange],
    }));
  };

  return {
    selectedYearRanges,
    handleYearRangeInputChange,
  };
}

const Explorer = () => {


  const [mainOpen, setMainOpen] = useState(true);
  const [previousEventOpen, setpreviousEventOpen] = useState(true);
  const [upcomingEventOpen, setupcomingEventOpen] = useState(true);

  const [blog, setBlog] = useState<BlogType[]>([]);
  const [event, setEvent] = useState<EventType[]>([]);
  const [yearRanges, setYearRanges] = useState<string[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getBlogs();
      setBlog(blogs);

      const uniqueYearRanges = Array.from(new Set(blogs.map((blog) => blog.year)));
      setYearRanges(uniqueYearRanges);
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchEvent = async () => {
      const upcomingEvent = await getEvents();
      setEvent(upcomingEvent)
    }

    fetchEvent();
  }, []);

  const { selectedYearRanges, handleYearRangeInputChange } = useSelectedYearRanges(yearRanges);


  return (
    <div className="bg-[#363451] w-[250px] text-gray-300 font-semibold title-bar-text text-base h-screen hidden md:block border-r-2 border-[#4A4772]">
      {/*  <div className="bg-[#595681] w-[200px] text-gray-300 font-source-sans-pro ml-[70px] top-8 fixed title-bar-text h-full hidden sm:block flex-1"> */}
      <p className="py-2 px-3 font-light uppercase tracking-wider mb-3">Explorer</p>
      <div>
        <input
          type="checkbox"
          className="checkbox absolute opacity-0 z-[-1]"
          id="portfolio-checkbox"
          checked={mainOpen}
          onChange={() => setMainOpen(!mainOpen)}
        />
        <label htmlFor="portfolio-checkbox" className="uppercase font-bold tracking-wider flex items-center cursor-pointer px-2">
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
              <div className="py-1 px-4 flex items-center">
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
            id="upcomingevent-checkbox"
            checked={upcomingEventOpen}
            onChange={() => setupcomingEventOpen(!upcomingEventOpen)}
          />
          <label htmlFor="upcomingevent-checkbox" className="uppercase font-bold tracking-wider flex items-center cursor-pointer px-3 ml-1 mt-1">
            <ChevronRight
              className="transition-transform duration-200"
              style={upcomingEventOpen ? { transform: 'rotate(90deg)' } : {}}
            />
            <p className='ml-2'>Upcoming Event</p>
          </label>

          <div
            className={`py-2 cursor-pointer ${upcomingEventOpen ? 'block' : 'hidden'}`}>

            {event.map((item) => (
              <a href={`/events#${item.id}`}>
                <div className="ml-5 py-1 px-4 flex items-center">
                  <Image
                    src={`js_icon.svg`}
                    alt={'upcoming event'}
                    height={18}
                    width={18}
                  />{' '}
                  <p className='p-1 ml-2'>{item.title}</p>
                </div>
              </a>
            ))}



            {event.length === 0 &&
              <>
                <div className="ml-5 py-1 px-4 flex items-center">
                  <p className='p-1 ml-2'>No upcoming event available</p>
                </div>
              </>}
          </div>



          <input
            type="checkbox"
            className="absolute opacity-0 z-[-1]"
            id="previousevent-checkbox"
            checked={previousEventOpen}
            onChange={() => setpreviousEventOpen(!previousEventOpen)}
          />
          <label htmlFor="previousevent-checkbox" className="uppercase font-bold tracking-wider flex items-center cursor-pointer px-3 ml-1 mt-1">
            <ChevronRight
              className="transition-transform duration-200"
              style={previousEventOpen ? { transform: 'rotate(90deg)' } : {}}
            />
            <p className='ml-2'>Previous Event</p>
          </label>
          <div
            className={`py-2 cursor-pointer ${previousEventOpen ? 'block' : 'hidden'}`}>

            {yearRanges.length === 0 &&
              <>
                <div className="ml-5 py-1 px-4 flex items-center">
                  <p className='p-1 ml-2'>No previous event available</p>
                </div>
              </>}

            {yearRanges.map((yearRange) => (
              <div key={yearRange} className='mt-2'>

                <input
                  type="checkbox"
                  className="absolute opacity-0 z-[-1]"
                  id={`event-checkbox-${yearRange}`}
                  checked={selectedYearRanges[yearRange] || false}
                  onChange={() => handleYearRangeInputChange(yearRange)}
                />

                <label
                  htmlFor={`event-checkbox-${yearRange}`}
                  className="uppercase font-bold tracking-wider flex items-center cursor-pointer px-3 ml-3"
                >
                  <ChevronRight
                    className="transition-transform duration-200"
                    style={selectedYearRanges[yearRange] ? { transform: 'rotate(90deg)' } : {}}
                  />
                  <p className="ml-2">{yearRange}</p>
                </label>


                <div className={`py-2 cursor-pointer ${selectedYearRanges[yearRange] ? 'block' : 'hidden'}`}>
                  {blog.filter((blog) => blog.year === yearRange).map((item) =>
                  (
                    <a href={`/events#${item.id}`}>
                      <div className="ml-5 py-1 px-4 flex items-center">
                        <Image
                          src={`js_icon.svg`}
                          alt={'previous event'}
                          height={18}
                          width={18}
                        />{' '}
                        <p className='p-1 ml-2'>{item.title}</p>
                      </div>
                    </a>
                  ))}
                </div>


              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;    