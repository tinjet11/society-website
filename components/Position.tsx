import React from 'react';
import Position_card from './Position_card';

const Position = () => {
    return (
        <div className='container'>
        <div className='flex flex-col m-2 primary-bg-colorrounded-lg shadow-lg p-4'>
                    <h1 className="text-center font-bold text-4xl mb-3">Join Us</h1>
          

                    <Position_card
                        title='Human Resources Manager'
                        description='Description'
                    />
                    <Position_card
                        title='Vice Event Manager'
                        description='Description'
                    />
                    <Position_card
                        title='Secretary'
                        description='Description'
                    />

                </div>
            </div>
    );
};

export default Position;
