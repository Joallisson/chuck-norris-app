export interface JokeRandomInterface {
    data: {
        jokeRandom: JokeInterface
    }
}

export interface JokeInterface {
    categories: string[]
    createdAt: string
    iconUrl: string
    id: string
    updatedAt: string
    url: string
    value: string
}