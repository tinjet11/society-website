import React from 'react';
import Position_card from './Position_card';
import { PositionType } from '@/types';

interface Props {
    data: PositionType[];
}
const Position = ({ data }: Props) => {

    return (
        <>
            <div className='flex flex-col m-2 rounded-lg p-4'>
                {data.length === 0 && <p>No position open for apply now.</p>}
                {data &&
                        data.map((position) => (
                            <Position_card
                            title= {position.title}
                            description={position.description}
                            link={position.link}
                        />
                        ))
                    }
            </div>
        </>
    );
};

export default Position;
