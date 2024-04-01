"use client";

import { useSession } from "@/app/_context/SessionContext";
import { IMovieWithScore, getTopMovies } from "@/lib/content_service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ResultsPage = () => {
  const { booleanAnswers, questions } = useSession();
  const router = useRouter();
  const [topMovies, setTopMovies] = useState<IMovieWithScore[]>([]);

  useEffect(() => {
    const isDone = booleanAnswers.length === questions.length;
    if (!isDone) {
      router.push("/");
    } else {
      // Assume getTopMovies fetches and sets the top movies based on answers
      // Replace this with the actual logic to fetch top movies
      const fetchedTopMovies: IMovieWithScore[] = getTopMovies(booleanAnswers);
      setTopMovies(fetchedTopMovies);
    }
  }, [booleanAnswers, questions.length, router]);

  const renderMoviePreview = (
    movieWithScore: IMovieWithScore,
    index: number
  ) => {
    const movie = movieWithScore.movieObject;
    const score = movieWithScore.score;

    return (
      <div key={movie.id} className="flex flex-col items-center p-4 relative">
        <div className="w-40 object-fill">
          <a href={`https://www.themoviedb.org/movie/${movie.id}/watch`}>
            <img
              src={`images/${movie.id}.jpg`}
              alt={movie.title}
              className="w-full h-full rounded-lg shadow-lg"
            />
          </a>
          <div className="absolute top-5 right-5 bg-white bg-opacity-25 rounded-full px-2 py-4">
            <div className="text-xs font-bold text-white">{index + 1}</div>
          </div>
        </div>
        <div className="mt-2 text-center font-medium">{movie.title}</div>
      </div>
    );
  };

  return (
    <main className="flex flex-col my-10 max-w-screen w-full max-w-full">
      <div className="flex flex-col gap-y-10 overflow-x-wrap w-full items-center">
        <h1 className="text-2xl font-bold text-center">Your Results</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topMovies.map((movieWithScore, index) =>
            renderMoviePreview(movieWithScore, index)
          )}
        </div>
      </div>
    </main>
  );
};

export default ResultsPage;
