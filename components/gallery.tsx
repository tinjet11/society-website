"use client"
import Image from 'next/image';

import { Download } from 'lucide-react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { ImageType } from '@/types';

interface Props {
    imageData: ImageType[]
}

const GalleryPage = ({ imageData }: Props) => {

    const downloadImage = (url: string) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.substring(url.lastIndexOf('/') + 1);
        link.click();
    };


    const imagesArray = imageData.map((item) => ({
        original: item.url,
        thumbnail: item.url,
    })
    );



    const customRenderItem = (item: any) => {
        return (
            <div className="flex-shrink-0 mx-4 relative">
                <div className="w-auto h-[400px]  flex items-center justify-center">
                    <Image
                        src={item.original}
                        width={300}
                        height={300}
                        alt="image"
                        className="object-fill"
                    />
                </div>
                <button
                    className="absolute top-2 right-2 bg-gray-300 p-2 rounded"
                    onClick={() => downloadImage(item.original)}
                >
                    <Download />
                </button>
            </div>
        );
    };

    return (
        <div>
            <div>
                <div className=' my-4'>
                    <div className="image-gallery-wrapper mx-auto">
                        <ImageGallery
                            items={imagesArray}
                            lazyLoad={true}
                            showFullscreenButton={true}
                            showPlayButton={false}
                            showThumbnails={true}
                            startIndex={0}
                            renderItem={customRenderItem}
                        />
                    </div>
                    <style jsx>{`
        .image-gallery-wrapper {
          width: auto; /* Set the width to 100% of the viewport width */
        }
      `}</style>
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
