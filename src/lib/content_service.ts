import { IMovie, movies } from '../app/movies/scored'
export const getAllMovies = async (): Promise<IMovie[]> => {
    return movies
}