"use client";
import { QuizContainer } from "../_components/quiz/QuizContainer";

const HomePage = () => {
  return (
    <main className="flex flex-col my-10 max-w-screen w-full max-w-full  ">
      <div className="  flex flex-col gap-y-10 overflow-x-wrap w-full items-center">
        {" "}
        <QuizContainer />
      </div>
    </main>
  );
};

export default HomePage;
