import { useState } from "react"
import fetchGraphQL from "./services/api"
import { JokeInterface, JokeRandomInterface } from "./views/Joke/joke.interface"
import { Header } from "./components/Header/header"
import { Footer } from "./components/Footer/footer"
import { Spinner } from "./components/Spinner/spinner"

function App() {

  const [joke, setJoke] = useState<JokeInterface | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleGenerateRandomJoke(): Promise<void>{
    setIsLoading(true)
    try {
      const query = `
        query {
          jokeRandom(data: { targetLang: "pt-BR" }){
            categories,
            createdAt,
            iconUrl,
            id,
            updatedAt,
            url,
            value
          }
        }
      `

      const { data }: JokeRandomInterface = await fetchGraphQL(query)

      setJoke(data.jokeRandom)
      
      
    } catch (error) {
      alert("Ocorreu um erro ao gerar um novo fato sobre Nhuck Norris!")
    }
    setIsLoading(false)
  }

  return (
    <div
      className='flex flex-col justify-center items-center h-screen'
    >

      <Header/>

      <div
        className='w-1/2 h-64 border-2 border-gray-400 flex justify-center items-center '
      >

        {isLoading
        ? <Spinner/>
        : false ? joke!.value : <p>GERE UM NOVO FATO SOBRE CHUCK NORRIS</p>
        }
      </div>

      <Footer
        isLoading={isLoading}
        handleClick={handleGenerateRandomJoke}
      />

    </div>
  )
}

export default App
