import { JokeInterface } from "../../views/Home/joke.interface"
import { Spinner } from "../Spinner/spinner"

type ContainerType = {
    isLoading: boolean
    joke: JokeInterface | null
}

export const Container = ({isLoading, joke}: ContainerType) => {

    return(
        <div
          className='w-1/2 h-64 border-2 border-gray-400 flex justify-center items-center '
        >

          {isLoading
          ? <Spinner/>
          : joke ? <p id="jokeText">{joke.value}</p> : <p id="initialText">GERE UM NOVO FATO SOBRE CHUCK NORRIS</p>
          }
        </div>
    )
}