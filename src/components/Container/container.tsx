import { JokeInterface } from "../../views/Home/joke.interface"
import { Spinner } from "../Spinner/spinner"

type ContainerType = {
    isLoading: boolean
    joke: JokeInterface | null
}

export const Container = ({isLoading, joke}: ContainerType) => {

    return(
        <div
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
          '
        >
          {isLoading
          ? <Spinner/>
          : joke 
            ? <p id="jokeText" className="text-center text-lg md:text-xl lg:text-2xl font-bold">{joke.value}</p> 
            : <p id="initialText" className="text-center text-lg md:text-xl lg:text-2xl font-bold">GERE UM NOVO FATO SOBRE CHUCK NORRIS</p>
          }
        </div>
    )
}
