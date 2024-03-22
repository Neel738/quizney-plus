import { Movie, attributeOptions, attributes, movies } from "@/app/movies/data";
import React from "react";
interface UserAttributes {
  [key: string]: string;
}
type CustomResultPageProps = {
  obj: any;
};
const calculateMatchingScores = (
  movies: Movie[],
  userAttributes: UserAttributes
): Movie[] => {
  const scoredMovies = movies.map((movie) => {
    let score = 0;
    for (const attribute in movie.attributes) {
      if (movie.attributes[attribute] === userAttributes[attribute]) {
        score++;
      }
    }
    return { ...movie, score };
  });

  // Sort movies by their score in descending order and return the top 5
  return scoredMovies.sort((a, b) => b.score - a.score).slice(0, 5);
};
function mapQuizResultsToAttributes(quizResults: {
  questions: any[];
  userInput: number[];
}) {
  let userAttributes = {} as Record<string, string>;

  quizResults.questions.forEach((question, index) => {
    const userAnswer = quizResults.userInput[index] as number;
    const attribute = attributes[index] as keyof typeof attributeOptions;
    const option = attributeOptions[attribute][userAnswer - 1];
    userAttributes[attribute] = option;
  });

  return userAttributes;
}
const CustomResultPage: React.FC<CustomResultPageProps> = ({ obj }) => {
  const userAttributes = mapQuizResultsToAttributes(obj);
  const matchingMovies = calculateMatchingScores(movies, userAttributes);
  return (
    <div className="max-w-screen text-wrap flex flex-col w-full gap-y-10   justify-center">
      <div>
        <h1 className="text-3xl font-bold">Your results</h1>
        <ol>
          {matchingMovies.map((movie, index) => (
            <li
              className="
            font-light text-lg
          "
            >
              {movie.title}
            </li>
          ))}
        </ol>
      </div>

      <hr />

      <div>
        <h1 className="text-3xl font-bold">Your answers</h1>
        {Object.keys(userAttributes).map((key, index) => (
          <div key={index} className="flex flex-col gap-y-2">
            <p className="font-light text-lg">
              {key}: {userAttributes[key]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomResultPage;
