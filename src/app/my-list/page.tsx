"use client";
import { getAllMovies } from "@/lib/content_service";
import { useEffect, useState } from "react";
import useStorage from "../_context/useStorage";
import { IMovie } from "../movies/scored";

const MyList = () => {
  const [movies, setMovies] = useState([] as IMovie[]);
  const [isClient, setIsClient] = useState(false);

  // Use useStorage hook for likedMovies
  const [likedMovies, setLikedMovies, getLikedMovies] = useStorage(
    "likedMovies",
    JSON.stringify([])
  );

  useEffect(() => {
    const loadMovies = async () => {
      const moviesFromService = await getAllMovies();
      setMovies(moviesFromService);
    };

    loadMovies();
  }, []);

  useEffect(() => {
    // This will be executed only on the client side after rehydration is complete
    setIsClient(true);
  }, []);
  const handleLikeMovie = (movie: IMovie) => {
    const currentLikedMovies = JSON.parse(getLikedMovies());
    if (!currentLikedMovies.find((m: IMovie) => m.id === movie.id)) {
      const updatedLikedMovies = [...currentLikedMovies, movie];
      setLikedMovies(JSON.stringify(updatedLikedMovies));
    }
  };

  const handleUnlikeMovie = (movie: IMovie) => {
    const currentLikedMovies = JSON.parse(getLikedMovies());
    const updatedLikedMovies = currentLikedMovies.filter(
      (m: IMovie) => m.id !== movie.id
    );
    setLikedMovies(JSON.stringify(updatedLikedMovies));
  };

  const renderMoviePreview = (movie: IMovie) => {
    return (
      <div className="flex flex-col " key={`movie.id-${movie.id}`}>
        <div className="w-40 object-fill">
          <a href={`https://www.themoviedb.org/movie/${movie.id}/watch`}>
            <img
              src={`images/${movie.id}.jpg`}
              alt={movie.title}
              className="w-full h-full"
            />
          </a>
        </div>
        <div>{movie.title}</div>
      </div>
    );
  };

  return (
    <main className="flex flex-col my-10 lg:max-w-[80vw] mx-auto min-w-[50vw] justify-center items-center  w-full px-4">
      <div className="mx-4 flex flex-col gap-y-10 w-full">
        <h1 className="text-3xl font-bold">My List</h1>
        {isClient && JSON.parse(likedMovies).length > 0 && (
          <div>
            <h2 className="text-xl font-bold">Liked Movies</h2>
            <div className="grid mx-auto items-center justify-center grid-cols-2 lg:grid-cols-6 gap-4">
              {JSON.parse(likedMovies).map((movie: IMovie, index: number) => (
                <div key={movie.id}>
                  {renderMoviePreview(movie)}{" "}
                  <button
                    onClick={() => handleUnlikeMovie(movie)}
                    className="border-2 border-gray-300 rounded-md p-2 mt-2"
                  >
                    Unlike
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        <hr />
        <h1 className="text-3xl font-bold">All Movies</h1>
        <div className="grid mx-auto items-center justify-center grid-cols-2 lg:grid-cols-6 gap-4">
          {movies
            .filter(
              (movie) =>
                !JSON.parse(likedMovies).find((m: IMovie) => m.id === movie.id)
            )
            .map((movie: IMovie, index: number) => (
              <div key={movie.id}>
                {renderMoviePreview(movie)}
                <button
                  onClick={() => handleLikeMovie(movie)}
                  className="border-2 border-gray-300 rounded-md p-2 mt-2"
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
