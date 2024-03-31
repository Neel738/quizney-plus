export type IQuestions = {
  id: number;
  question?: string;
  questionTrueFalseVersion: string;
  answer?: string[];
  reasonWhyWeAsk: string;
};

export const quizQuestions: { questions: IQuestions[] } = {
  questions: [
    {
      id: 1,
      questionTrueFalseVersion:
        "Is it a total mood booster, like instant good vibes?",
      reasonWhyWeAsk:
        "To identify if the movie uplifts spirits and positively alters mood.",
    },
    {
      id: 2,
      questionTrueFalseVersion:
        "Does it have epic plot twists that leave you shook?",
      reasonWhyWeAsk:
        "To determine if the movie offers surprising and engaging narrative turns.",
    },
    {
      id: 3,
      questionTrueFalseVersion: "Is it super quirky, like 'this is so random'?",
      reasonWhyWeAsk:
        "To gauge if the movie presents unique and unconventional elements.",
    },
    {
      id: 4,
      questionTrueFalseVersion:
        "Are the visuals mind-blowing, like 'wow, my eyes are blessed'?",
      reasonWhyWeAsk: "To assess the aesthetic and visual impact of the movie.",
    },
    {
      id: 5,
      questionTrueFalseVersion: "Is it deep, making you ponder life and stuff?",
      reasonWhyWeAsk:
        "To identify movies that provoke thought and deeper reflection.",
    },
    {
      id: 6,
      questionTrueFalseVersion: "Does it feature epic comebacks or clapbacks?",
      reasonWhyWeAsk:
        "To determine the presence of memorable and impactful dialogues.",
    },
    {
      id: 7,
      questionTrueFalseVersion: "Is it all about chasing dreams and big goals?",
      reasonWhyWeAsk:
        "To understand if the movie is inspirational and motivates ambition.",
    },
    {
      id: 8,
      questionTrueFalseVersion: "Does it have that feel-good friendship vibe?",
      reasonWhyWeAsk:
        "To assess if the movie emphasizes friendships or positive relationships.",
    },
    {
      id: 9,
      questionTrueFalseVersion:
        "Is it packed with iconic one-liners or catchphrases?",
      reasonWhyWeAsk:
        "To gauge if the movie has memorable and quotable dialogue.",
    },
    {
      id: 10,
      questionTrueFalseVersion:
        "Is it a cultural phenomenon, like everyone's talking about it?",
      reasonWhyWeAsk:
        "To identify if the movie has significant cultural or societal impact.",
    },
    {
      id: 11,
      questionTrueFalseVersion:
        "Is it a genre blend, like combining sci-fi with comedy or horror with romance?",
      reasonWhyWeAsk:
        "To determine the movie's cross-genre appeal and creative blending of themes.",
    },
    {
      id: 12,
      questionTrueFalseVersion:
        "Does it tackle significant themes, like social issues, existential questions, or moral dilemmas?",
      reasonWhyWeAsk:
        "To assess the movie's engagement with significant and meaningful themes.",
    },
  ],
};
