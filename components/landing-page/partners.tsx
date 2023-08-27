import React from 'react'
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { PartnerType } from '@/types';

interface Props{
  data: PartnerType[],
}
const Partners = ({data}:Props) => {

  return (
    <div>
      <Marquee>
        {data.map((item, index) => (
          <div key={index}>
            <div className="w-[300px] h-[300px]">
              <div className="object-contain h-full flex justify-center items-center p-2">
                <Image
                  src={item.imageUrl}
                  alt="partner Img"
                  sizes="100vw"
                  style={{
                    width: 'auto',
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