import { IMovie, movies } from '../app/movies/scored';

export interface IAnswer {
    questionId: number;
    answer: boolean;
}

export interface IMovieWithScore {
    movieObject: IMovie;
    score: number;
}



export const getAllMovies = async (): Promise<IMovie[] | any[]> => {
    return movies
}


export const getMovieById = async (id: number): Promise<IMovie | undefined| any> => {
    return movies.find((movie) => movie.id === id)
}


export function getTopMovies(answers: IAnswer[], n: number = 5): IMovieWithScore[] {
    
    const movieScores: any[] = movies.map(movie => {
        let score = 0;
        answers.forEach(answer => {
            // Assuming each questionId corresponds to a key in the movie's scores
            // This also assumes that the score is a boolean represented as 0 or 1 in the movie scores
            const key = Object.keys(movie.scores)[answer.questionId - 1] as keyof typeof movie.scores;
            const answerScore = answer.answer ? 1 : 0;
            if (movie.scores[key] === answerScore) {
                score += 1;
            }
        });
        return { movieObject: movie, score };
    });

    // Sort movies by their score in descending order and take the top n
    movieScores.sort((a, b) => b.score - a.score);

    return movieScores.slice(0, n);
}
