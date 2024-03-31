"use client";
import { getAllMovies } from "@/lib/content_service";
import { useEffect, useState } from "react";
import { IMovie } from "../movies/scored";

const MyList = () => {
  const [movies, setMovies] = useState([] as IMovie[]);
  const [likedMovies, setLikedMovies] = useState([] as IMovie[]);

  useEffect(() => {
    const loadMovies = async () => {
      const moviesFromService = await getAllMovies();
      setMovies(moviesFromService);
    };

    loadMovies();
  }, []);

  const handleLikeMovie = (movie: IMovie) => {
    if (!likedMovies.includes(movie)) {
      setLikedMovies([...likedMovies, movie]);
    }
  };

  const renderMoviePreview = (movie: IMovie) => {
    return (
      <div className="flex flex-col ">
        <div className="w-40   object-fill">
          <img
            src={`images/${movie.id}.jpg`}
            alt={movie.title}
            className="w-full h-full"
          />
        </div>
        <div>{movie.title}</div>
      </div>
    );
  };

  return (
    <main className="flex flex-col my-10  lg:max-w-[80vw] mx-auto min-w-[50vw] justify-center items-center">
      <div className="mx-4 flex flex-col gap-y-10">
        <h1 className="text-3xl font-bold">My List</h1>
        <div>
          {likedMovies.map((movie, index) => (
            <button key={index} onClick={() => handleLikeMovie(movie)}>
              {renderMoviePreview(movie)}
            </button>
          ))}
        </div>
        <hr />
        <div>All Movies</div>
        <div>
          {movies
            .filter((movie) => !likedMovies.includes(movie))
            .map((movie, index) => (
              <div>
                {renderMoviePreview(movie)}
                <button
                  key={index}
                  onClick={() => handleLikeMovie(movie)}
                  className="
                
                   border-2 border-gray-300 rounded-md p-2 mt-2
                "
                >
                  Like
                </button>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default MyList;
