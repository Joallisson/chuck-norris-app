import React from 'react';

export const Header = () => {
    return (
        <header
            role="banner"
            className='
                w-full 
                max-w-screen-lg 
                h-16 
                md:h-20 
                lg:h-24 
                border-red-500 
                flex 
                justify-center 
                items-center
                bg-slate-500
                mx-auto 
                px-4
            '
        >
            <h1
                className='
                    text-lg 
                    sm:text-xl 
                    md:text-2xl 
                    lg:text-3xl 
                    font-bold 
                    text-white
                '
            >
                Fatos sobre Chuck Norris
            </h1>
        </header>
    );
};
