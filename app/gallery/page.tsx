"use client"
import Image from 'next/image';
import getGalleries from '@/actions/getGallery';
import { GalleryType } from '@/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const GalleryPage = () => {
    const [gallery, setGallery] = useState<GalleryType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchGallery = async () => {
            setIsLoading(true);
            const galleryData = await getGalleries();
            setGallery(galleryData);
            setIsLoading(false);
        };

        fetchGallery();
    }, []);

    const downloadImage = (url: string) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.substring(url.lastIndexOf('/') + 1);
        link.click();
    };

    const [slide, setSlide] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth > 1140) {
                setSlide(3);
            } else {
                setSlide(1);
            }
        };

        handleResize(); // Set initial slide value

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isLoading ?
                <>
                    <div className='p-4 my-4'>
                        <Skeleton className={`w-[400px] h-[50px] my-2 aspect-square`} />
                        <Skeleton className={`w-[200px] h-[50px] my-2 aspect-square mb-4 `} />
                        <div className='flex justify-between'>
                            {Array.from(Array(slide).keys()).map((index) => (
                                <Skeleton
                                    key={index}
                                    className={`w-[500px] h-[300px] my-2 aspect-square`}
                                />
                            ))
                            }
                        </div>
                    </div>
                </>
                :
                <>
                    {gallery.map((item) => (
                        <div key={item.id} className='p-4 my-4'>
                            <div className='my-4'>
                                <h2 className="text-3xl font-bold tracking-tight">{item.title}</h2>
                                <p className="text-sm text-muted-foreground">
                                    {item.time}
                                </p>
                            </div>

                            <Swiper
                                spaceBetween={40}
                                slidesPerView={slide}
                                loop={true}
                                pagination={{
                                    type: 'progressbar',
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {item.images?.map((image) => (
                                    <SwiperSlide key={image.id} className="flex items-center justify-center">
                                        <div key={image.id} className="relative">
                                            <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center">
                                                <Image
                                                    src={image.url}
                                                    width={300}
                                                    height={300}
                                                    alt="image"
                                                    className='object-fill'
                                                />
                                            </div>
                                            <button
                                                className="absolute bottom-2 right-2 bg-gray-300 p-2 rounded"
                                                onClick={() => downloadImage(image.url)}
                                            >
                                                <Download />
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    ))}
                </>
            }
        </div>
    );
};

export default GalleryPage;
