"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import Marquee from 'react-fast-marquee';

const partnerImg = [
  {
    url: '/partners/iet.svg',
  },
  {
    url: '/partners/mkb.svg',
  },
  {
    url: '/partners/elvtd.svg',
  },
  {
    url: '/partners/kopidao.svg',
  },
  {
    url: '/partners/rebult.svg',
  },
  {
    url: '/partners/dag.svg',
  },
];

const Partners = () => {
  return (
    <div>
      {/*             <Swiper
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >            

            {partnerImg.map((item)=>(
                 <SwiperSlide>
                 <div className="w-auto h-[200px]">
                     <div className="object-contain w-full h-full flex justify-center items-center p-2">
                         <Image
                             src= {item.url}
                             alt="partner Img"
                             sizes="100vw"
                             style={{
                                 width: '100%',
                                 height: 'auto',
                             }}
                             width={500}
                             height={300}
                             className='self-center'
                         />
                     </div>
                 </div>
             </SwiperSlide>
            ))}  

            </Swiper> */}
      <Marquee>
        {partnerImg.map((item, index) => (
          <div key={index}>
            <div className="w-auto h-[200px]">
              <div className="object-contain w-full h-full flex justify-center items-center p-2">
                <Image
                  src={item.url}
                  alt="partner Img"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  width={500}
                  height={300}
                  className='self-center'
                />
              </div>
            </div>
          </div>
        ))}

      </Marquee>


    </div>
  )
}

export default Partners