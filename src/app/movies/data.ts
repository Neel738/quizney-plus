export interface Movie {
    title: string;
    imagePreview: string;
    attributes: {
      [key: string]: string;
    };
  }

  export const attributes = [
    "Time Machine",
    "Emotion Potion",
    "Unlikely Buddies",
    "Mystery Box",
    "Wonderland Scale",
  ];

  export const attributeOptions = {
    "Time Machine": [
      "Go back to old times 🕰️",
      "Stay right now ⏰",
      "Zoom into the future 🚀",
    ],
    "Emotion Potion": [
      "Makes you feel warm and fuzzy ❤️",
      "Makes you giggle and laugh 😂",
      "Gives you the shivers 😱",
    ],
    "Unlikely Buddies": [
      "Yes, they're very different! 🐱🐶",
      "No, they're very alike! 👯‍♀️",
    ],
    "Mystery Box": ["Lots of surprises 🎁", "Easy to follow 🧭"],
    "Wonderland Scale": [
      "Just like our world 🌍",
      "A little bit strange 🤔",
      "Super duper strange! 🌌",
    ],
  };

export const movies : Movie[] = [
    {
      "title": "Back to the Future",
      "imagePreview": "url_to_image",
      "attributes": {
        "Time Machine": "Go back to old times 🕰️",
        "Emotion Potion": "Makes you giggle and laugh 😂",
        "Unlikely Buddies": "Yes, they're very different! 🐱🐶",
        "Mystery Box": "Lots of surprises 🎁",
        "Wonderland Scale": "A little bit strange 🤔"
      }
    },
    {
      "title": "The Martian",
      "imagePreview": "url_to_image",
      "attributes": {
        "Time Machine": "Stay right now ⏰",
        "Emotion Potion": "Makes you feel warm and fuzzy ❤️",
        "Unlikely Buddies": "No, they're very alike! 👯‍♀️",
        "Mystery Box": "Easy to follow 🧭",
        "Wonderland Scale": "Super duper strange! 🌌"
      }
    },
    {
      "title": "The Intouchables",
      "imagePreview": "url_to_image",
      "attributes": {
        "Time Machine": "Stay right now ⏰",
        "Emotion Potion": "Makes you feel warm and fuzzy ❤️",
        "Unlikely Buddies": "Yes, they're very different! 🐱🐶",
        "Mystery Box": "Easy to follow 🧭",
        "Wonderland Scale": "Just like our world 🌍"
      }
    },
    {
      "title": "Inception",
      "imagePreview": "url_to_image",
      "attributes": {
        "Time Machine": "Stay right now ⏰",
        "Emotion Potion": "Gives you the shivers 😱",
        "Unlikely Buddies": "No, they're very alike! 👯‍♀️",
        "Mystery Box": "Lots of surprises 🎁",
        "Wonderland Scale": "Super duper strange! 🌌"
      }
    },
    {
      "title": "Toy Story",
      "imagePreview": "url_to_image",
      "attributes": {
        "Time Machine": "Stay right now ⏰",
        "Emotion Potion": "Makes you giggle and laugh 😂",
        "Unlikely Buddies": "Yes, they're very different! 🐱🐶",
        "Mystery Box": "Lots of surprises 🎁",
        "Wonderland Scale": "A little bit strange 🤔"
      }
    }, {
        "title": "The Truman Show",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Stay right now ⏰",
            "Emotion Potion": "Makes you feel warm and fuzzy ❤️",
            "Unlikely Buddies": "No, they're very alike! 👯‍♀️",
            "Mystery Box": "Easy to follow 🧭",
            "Wonderland Scale": "Just like our world 🌍"
        }
    },
    {
        "title": "Groundhog Day",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Stay right now ⏰",
            "Emotion Potion": "Makes you giggle and laugh 😂",
            "Unlikely Buddies": "Yes, they're very different! 🐱🐶",
            "Mystery Box": "Lots of surprises 🎁",
            "Wonderland Scale": "A little bit strange 🤔"
        }
    },
    {
        "title": "The Fifth Element",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Zoom into the future 🚀",
            "Emotion Potion": "Gives you the shivers 😱",
            "Unlikely Buddies": "No, they're very alike! 👯‍♀️",
            "Mystery Box": "Lots of surprises 🎁",
            "Wonderland Scale": "Super duper strange! 🌌"
        }
    },
    {
        "title": "The Grand Budapest Hotel",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Go back to old times 🕰️",
            "Emotion Potion": "Makes you giggle and laugh 😂",
            "Unlikely Buddies": "Yes, they're very different! 🐱🐶",
            "Mystery Box": "Lots of surprises 🎁",
            "Wonderland Scale": "A little bit strange 🤔"
        }
    },
    {
        "title": "Avatar",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Zoom into the future 🚀",
            "Emotion Potion": "Makes you feel warm and fuzzy ❤️",
            "Unlikely Buddies": "No, they're very alike! 👯‍♀️",
            "Mystery Box": "Easy to follow 🧭",
            "Wonderland Scale": "Just like our world 🌍"
        }
    },
    {
        "title": "The Lion King",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Stay right now ⏰",
            "Emotion Potion": "Makes you feel warm and fuzzy ❤️",
            "Unlikely Buddies": "Yes, they're very different! 🐱🐶",
            "Mystery Box": "Easy to follow 🧭",
            "Wonderland Scale": "Just like our world 🌍"
        }
    },
    {
        "title": "The Shawshank Redemption",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Go back to old times 🕰️",
            "Emotion Potion": "Gives you the shivers 😱",
            "Unlikely Buddies": "No, they're very alike! 👯‍♀️",
            "Mystery Box": "Lots of surprises 🎁",
            "Wonderland Scale": "Super duper strange! 🌌"
        }
    },
    {
        "title": "The Avengers",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Zoom into the future 🚀",
            "Emotion Potion": "Makes you giggle and laugh 😂",
            "Unlikely Buddies": "Yes, they're very different! 🐱🐶",
            "Mystery Box": "Lots of surprises 🎁",
            "Wonderland Scale": "A little bit strange 🤔"
        }
    },
    {
        "title": "Forrest Gump",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Go back to old times 🕰️",
            "Emotion Potion": "Makes you feel warm and fuzzy ❤️",
            "Unlikely Buddies": "No, they're very alike! 👯‍♀️",
            "Mystery Box": "Easy to follow 🧭",
            "Wonderland Scale": "Just like our world 🌍"
        }
    },
    {
        "title": "The Dark Knight",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Stay right now ⏰",
            "Emotion Potion": "Gives you the shivers 😱",
            "Unlikely Buddies": "No, they're very alike! 👯‍♀️",
            "Mystery Box": "Lots of surprises 🎁",
            "Wonderland Scale": "Super duper strange! 🌌"
        }
    },
    {
        "title": "The Social Network",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Stay right now ⏰",
            "Emotion Potion": "Makes you giggle and laugh 😂",
            "Unlikely Buddies": "Yes, they're very different! 🐱🐶",
            "Mystery Box": "Lots of surprises 🎁",
            "Wonderland Scale": "A little bit strange 🤔"
        }
    },
    {
        "title": "The Godfather",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Go back to old times 🕰️",
            "Emotion Potion": "Makes you feel warm and fuzzy ❤️",
            "Unlikely Buddies": "Yes, they're very different! 🐱🐶",
            "Mystery Box": "Easy to follow 🧭",
            "Wonderland Scale": "Just like our world 🌍"
        }
    },
    {
        "title": "Pulp Fiction",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Stay right now ⏰",
            "Emotion Potion": "Gives you the shivers 😱",
            "Unlikely Buddies": "No, they're very alike! 👯‍♀️",
            "Mystery Box": "Lots of surprises 🎁",
            "Wonderland Scale": "Super duper strange! 🌌"
        }
    },
    {
        "title": "The Silence of the Lambs",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Zoom into the future 🚀",
            "Emotion Potion": "Makes you feel warm and fuzzy ❤️",
            "Unlikely Buddies": "No, they're very alike! 👯‍♀️",
            "Mystery Box": "Easy to follow 🧭",
            "Wonderland Scale": "Just like our world 🌍"
        }
    },
    {
        "title": "The Shining",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Go back to old times 🕰️",
            "Emotion Potion": "Makes you giggle and laugh 😂",
            "Unlikely Buddies": "Yes, they're very different! 🐱🐶",
            "Mystery Box": "Lots of surprises 🎁",
            "Wonderland Scale": "A little bit strange 🤔"
        }
    },
    {
        "title": "The Revenant",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Stay right now ⏰",
            "Emotion Potion": "Gives you the shivers 😱",
            "Unlikely Buddies": "No, they're very alike! 👯‍♀️",
            "Mystery Box": "Lots of surprises 🎁",
            "Wonderland Scale": "Super duper strange! 🌌"
        }
    },
    {
        "title": "The Green Mile",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Zoom into the future 🚀",
            "Emotion Potion": "Makes you feel warm and fuzzy ❤️",
            "Unlikely Buddies": "Yes, they're very different! 🐱🐶",
            "Mystery Box": "Easy to follow 🧭",
            "Wonderland Scale": "Just like our world 🌍"
        }
    },
    {
        "title": "The Departed",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Stay right now ⏰",
            "Emotion Potion": "Makes you giggle and laugh 😂",
            "Unlikely Buddies": "Yes, they're very different! 🐱🐶",
            "Mystery Box": "Lots of surprises 🎁",
            "Wonderland Scale": "A little bit strange 🤔"
        }
    },
    {
        "title": "The Usual Suspects",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Go back to old times 🕰️",
            "Emotion Potion": "Gives you the shivers 😱",
            "Unlikely Buddies": "No, they're very alike! 👯‍♀️",
            "Mystery Box": "Lots of surprises 🎁",
            "Wonderland Scale": "Super duper strange! 🌌"
        }
    },
    {
        "title": "The Godfather: Part II",
        "imagePreview": "url_to_image",
        "attributes": {
            "Time Machine": "Zoom into the future 🚀",
            "Emotion Potion": "Makes you feel warm and fuzzy ❤️",
            "Unlikely Buddies": "No, they're very alike! 👯‍♀️",
            "Mystery Box": "Easy to follow 🧭",
            "Wonderland Scale": "Just like our world 🌍"
        }
    }
  ]
  