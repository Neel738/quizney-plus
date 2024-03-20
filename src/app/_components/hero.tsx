"use client";

import { useRouter } from "next/navigation";
import { TypewriterEffectSmooth } from "./raw/typewriter-effect";

export function Hero() {
  const router = useRouter();
  const words = [
    {
      text: "Ready",
    },
    {
      text: "to",
    },
    {
      text: "watch",
    },
    {
      text: "something?",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
          onClick={() => {
            router.push("find");
          }}
        >
          Find something 🔍
        </button>
        <button
          className="w-40 h-10 rounded-xl bg-purple-600 text-white border border-black  text-sm"
          onClick={() => {
            router.push("my-list");
          }}
        >
          Liked shows ❤️
        </button>

        <button
          className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm"
          onClick={() => {
            router.push("settings");
          }}
        >
          Settings ⚙️
        </button>
      </div>
    </div>
  );
}
