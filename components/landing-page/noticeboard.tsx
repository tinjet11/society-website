"use client"

import getNoticeBoard from '@/actions/getNoticeBoard';
import { NoticeBoardType } from '@/types';
import React, { useEffect, useState } from 'react'
import { Skeleton } from '../ui/skeleton';
import NoticeBoardCard from './noticeboard-card';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import LinkPlaceholder from '../ui/link-placeholder';
import { it } from 'node:test';

const NoticeBoard = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [noticeboard, setNoticeBoard] = useState<NoticeBoardType[]>([])
  const [isMounted, setIsMounted] = useState(false);



  useEffect(() => {
    const fetchNoticeBoards = async () => {
      setIsLoading(true);
      const noticeBoards = await getNoticeBoard();
      setNoticeBoard(noticeBoards);
      setIsLoading(false);
    };
    fetchNoticeBoards();

  }, []);


  useEffect(() => {
    setIsMounted(true);
  }, []);

  //prevent hydration error
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/*       {isLoading ? (
        <Skeleton className="w-full h-[500px] mt-4 aspect-square" />
      ) : <>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {noticeboard.map((item) => (
            <SwiperSlide>
              <NoticeBoardCard data={item} />
            </SwiperSlide>

          ))}
        </Swiper>
      </>
      } */}
      <p>
        {noticeboard.map((item) => (
          <span className='mx-3'> {item.title}. {item.description}. <LinkPlaceholder text={item.buttonText} url={item.link} /></span>
        ))}
      </p>


    </>

  )
}

export default NoticeBoard

{/* <div className='h-[500px]' 
      style={{ background: " url('/CSS_dark_icon.png')", backgroundSize: "contain", backgroundPosition: "center", 
      backgroundRepeat: "no-repeat" }}> */}