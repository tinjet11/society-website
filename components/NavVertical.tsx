import Image from 'next/image'
import Link from 'next/link'

export default function NavVertical() {
    return (
        <div className="hidden lg:block h-full lg:w-[200px] left-0 top-0 flex flex-col bg-[#4A4772] gap-5 p-3 pl-0 fixed">
            <div className='flex flex-row sm:justify-center justify-center pl-1 mb-2'>
                <Image
                    src={'/nav/logo.svg'}
                    alt={'CSS logo'}
                    width={50}
                    height={50}
                    className='object-contain'
                />
            </div>

            <Link href={'/about-us'}>

                <div className='nav-item'>
                    <Image
                        src={'/nav/about-us.svg'}
                        alt={'about us'}
                        width={20}
                        height={20}
                        className='object-contain'
                    />
                    <p className='nav-text'>About us</p>
                </div>
            </Link>


            <Link href={'/events'}>
                <div className='nav-item'>
                    <Image
                        src={'/nav/events.svg'}
                        alt={'events'}
                        width={20}
                        height={20}
                        className='object-contain justify-center'
                    />
                    <p className='nav-text'>Events</p>
                </div>
            </Link>


            <Link href={'/blog'}>
                <div className='nav-item'>
                    <Image
                        src={'/nav/blog.svg'}
                        alt={'blog'}
                        width={20}
                        height={20}
                        className='object-contain justify-center'
                    />
                    <p className='nav-text'>Blog</p>
                </div>
            </Link>

            <Link href={'/resources'}>
                <div className='nav-item'>
                    <Image
                        src={'/nav/resources.svg'}
                        alt={'resource'}
                        width={20}
                        height={20}
                        className='object-contain justify-center'
                    />
                    <p className='nav-text'>Resource</p>
                </div>
            </Link>
            <Link href={'/contact-us'}>
                <div className='nav-item'>
                    <Image
                        src={'/nav/contact-us.svg'}
                        alt={'contact-us'}
                        width={20}
                        height={20}
                        className='object-contain justify-center'
                    />
                    <p className='nav-text'>Contact Us</p>
                </div>
            </Link>
        </div>
    )
}
