import { useState } from "react"
import fetchGraphQL from "../../services/api"
import { JokeInterface, JokeRandomInterface } from "./joke.interface"
import { Header } from "../../components/Header/header"
import { Footer } from "../../components/Footer/footer"
import { Navbar } from "../../components/Navbar/navbar"
import { Container } from "../../components/Container/container"

export const Home = () => {
    const [joke, setJoke] = useState<JokeInterface | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [targetLangSelect, setTargetLangSelect] = useState<string>('pt-BR')
    const [categorySelect, setCategorySelect] = useState<string>("")

  async function handleGenerateRandomJoke(): Promise<void>{
    setIsLoading(true)
    try {
      const category = categorySelect != "" ? `, category: "${categorySelect}"` : ""

      const query = `
        query {
          jokeRandom(data: { targetLang: "${targetLangSelect}" ${category} }){
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

      <Navbar
        targetLangSelect={targetLangSelect}
        setTargetLangSelect={setTargetLangSelect}
        categorySelect={categorySelect}
        setCategorySelect={setCategorySelect}
      />

      <Container
        isLoading={isLoading}
        joke={joke}
      />

      <Footer
        isLoading={isLoading}
        handleClick={handleGenerateRandomJoke}
      />

    </div>
  )
}