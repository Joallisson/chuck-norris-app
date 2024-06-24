export const Spinner = () => {
    
    return(
        <div 
            className='
                flex 
                items-center 
                justify-center 
                min-h-screen 
                
            '
        >
            <div 
                className='
                    flex 
                    items-center 
                    justify-center 
                    space-x-2
                '>
                <div
                    id="spinner"
                    className='
                        w-8 h-8 
                        border-4 
                        border-blue-500 
                        border-dotted 
                        rounded-full 
                        animate-spin
                    '></div>
                <span>Carregando...</span>
            </div>
        </div>
    )
}