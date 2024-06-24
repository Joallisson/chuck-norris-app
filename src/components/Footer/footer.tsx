type Props = {
    isLoading: boolean
    handleClick: () => void
}

export const Footer = ({handleClick, isLoading}: Props) => {
    return (
        <div
            className='
                w-full
                max-w-screen-lg
                flex
                justify-center
                py-4
                bg-gray-200
                mx-auto
                px-4
                border-2
                border-gray-500
                shadow-md
            '
        >
            <button
                id="generateNewJoke"
                disabled={isLoading}
                className='
                    bg-green-500 
                    hover:bg-green-600 
                    text-white 
                    font-bold 
                    py-4
                    px-6 
                    rounded-md 
                    shadow-lg 
                    transition 
                    duration-300 
                    ease-in-out 
                    transform 
                    hover:-translate-y-1 
                    hover:scale-110
                '
                onClick={handleClick}
            >
                <p className="text-base md:text-lg lg:text-xl">GERAR MAIS FATOS</p>
            </button>
        </div>
    )
}
