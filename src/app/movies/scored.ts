
export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    [key: string]: any;
    vote_average: number;
    vote_count: number;
    scores: {
        genre: string;
        mood_booster: number;
        plot_twists: number;
        quirky: number;
        mindblowing_visuals: number;
        deep_thoughts: number;
        comebacks_clapbacks: number;
        dream_chasing: number;
        feelgood_friendship: number;
        iconic_one_liners: number;
        cultural_phenomenon: number;
        genre_blend: number;
        significant_themes: number;
    };
    
}
export const movies = [
  {
    adult: false,
    backdrop_path: "/5bzPWQ2dFUl2aZKkp7ILJVVkRed.jpg",
    genre_ids: [12, 35, 878],
    id: 105,
    original_language: "en",
    original_title: "Back to the Future",
    overview:
      "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
    popularity: 94.191,
    poster_path: "/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
    release_date: "1985-07-03",
    title: "Back to the Future",
    video: false,
    vote_average: 8.3,
    vote_count: 19134,
    scores: {
      genre: "Science Fiction",
      mood_booster: 1,
      plot_twists: 1,
      quirky: 1,
      mindblowing_visuals: 0,
      deep_thoughts: 0,
      comebacks_clapbacks: 0,
      dream_chasing: 1,
      feelgood_friendship: 1,
      iconic_one_liners: 1,
      cultural_phenomenon: 1,
      genre_blend: 0,
      significant_themes: 1,
    },
  },
];
