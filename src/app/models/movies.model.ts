export interface Movie{
    id: number,
    title: string,
    poster: string,
    genre: String[],
    year: number,
    duration: number,
    imdbRating: number,
    actors: number[],
}

export interface Actor{
    id: number,
    first_name: string,
    last_name: string,
    gender: string,
    bornCity: string,
    birthdate: Date,
    img: string,
    rating: number,
    movies: number[]
}

export interface Companie{
    id: number,
    name: string,
    country: string,
    createYear: number,
    employees: number,
    rating: number,
    movies: number[]
}

