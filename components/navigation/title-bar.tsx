/* "use client"
import { consolas } from '@/app/layout';
import Image from 'next/image';

export default function Titlebar(){
    function handleClick() {
        if (confirm("Close Window?")) {
            window.close();
        }
    }
    return (
      <nav className={`${consolas.className} title-bar-text first-letter:title-bar secondary-bg-color flex h-[30px] w-full items-center px-2 border-b border-[#363451]`}>
      
            <div className="flex gap-x-5 mr-auto">
                <Image
                    src="/nav/css_dark_icon(1).svg"
                    alt="CSS Logo"
                    height={15}
                    width={15}
                    className='object-fit'
                />
                <p className='sm:block hidden'>File</p>
                <p className='sm:block hidden'>View</p>
                <p className='sm:block hidden'>Edit</p>
                <p className='sm:block hidden'>Go</p>
                <p className='sm:block hidden'>Run</p>
                <p className='sm:block hidden'>Terminal</p>
                <p className='sm:block hidden'>Help</p>
            </div>


            <div className="flex gap-x-2 ml-auto">
                <span className="rounded-lg bg-[#f1fa8c] h-3 w-3 "></span>
                <span className="rounded-lg bg-[#50fa7b] h-3 w-3 "></span>
                <span onClick={handleClick} className="rounded-lg bg-[#ff5555] h-3 w-3 "></span>
            </div> 
        </nav>
    );
}; */

import { consolas } from '@/app/layout';
import Image from 'next/image';

export default function Titlebar(){

    return (
      <nav className={`${consolas.className} title-bar-text first-letter:title-bar secondary-bg-color flex h-[30px] w-full items-center px-2 border-b border-[#363451]`}>
      
            <div className="flex gap-x-5 mr-auto">
                <Image
                    src="/nav/css_dark_icon(1).svg"
                    alt="CSS Logo"
                    height={15}
                    width={15}
                    className='object-fit'
                />
                <p className='sm:block hidden'>File</p>
                <p className='sm:block hidden'>View</p>
                <p className='sm:block hidden'>Edit</p>
                <p className='sm:block hidden'>Go</p>
                <p className='sm:block hidden'>Run</p>
                <p className='sm:block hidden'>Terminal</p>
                <p className='sm:block hidden'>Help</p>
            </div>


            <div className="flex gap-x-2 ml-auto">
                <span className="rounded-lg bg-[#f1fa8c] h-3 w-3 "></span>
                <span className="rounded-lg bg-[#50fa7b] h-3 w-3 "></span>
                <span className="rounded-lg bg-[#ff5555] h-3 w-3 "></span>
            </div> 
        </nav>
    );
}