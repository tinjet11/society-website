import React from 'react';

type Props = {
    text: string;
};

const Button = ({ text }: Props) => {

    return (
        <button className="bg-[#E981D9] hover:bg-[#DCA7EE] text-white font-bold py-2 px-4 rounded">
            {text}
        </button>
    );
};

export default Button;
