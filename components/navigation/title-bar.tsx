import Image from 'next/image';


const Titlebar = () => {
    return (
        <nav className='title-bar secondary-bg-color flex h-[30px] w-full items-center px-2 title-bar-text border-b border-[#363451]'>
            {/* 
             <section className='top-0 fixed secondary-bg-color flex h-8 w-full items-center px-2 title-bar-text border-b border-[#363451]'> */}
            <div className="flex gap-x-5 mr-auto">
                <Image
                    src="/nav/vscode_icon.svg"
                    alt="VSCode Icon"
                    height={15}
                    width={15}
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
};

export default Titlebar;