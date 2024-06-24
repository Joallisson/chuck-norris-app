import React from 'react';
import { JokeInterface } from '../../views/Home/joke.interface';
import { Spinner } from '../Spinner/spinner';

type ContainerType = {
    isLoading: boolean;
    joke: JokeInterface | null;
};

export const Container = ({ isLoading, joke }: ContainerType) => {
    return (
        <section
            role="region"
            aria-label="Container de piadas sobre Chuck Norris"
            className='
                w-full
                max-w-screen-lg
                h-64
                border-2
                border-gray-400
                flex
                justify-center
                items-center
                mx-auto
                px-4
                py-2
                bg-white
                shadow-md
                text-lg
                md:text-xl
                lg:text-2xl
                font-bold
            '
        >
            {isLoading ? (
                <Spinner aria-live="polite" />
            ) : joke ? (
                <p id="jokeText" className="text-center">
                    {joke.value}
                </p>
            ) : (
                <p id="initialText" className="text-center">
                    GERE UM NOVO FATO SOBRE CHUCK NORRIS
                </p>
            )}
        </section>
    );
};
