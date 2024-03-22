import { DemoQuiz } from "../_components/quiz/demo1";

const HomePage = () => {
  return (
    <main className="flex flex-col my-10 max-w-screen w-full  ">
      <div className=" mx-4 flex flex-col gap-y-10 overflow-x-wrap w-full items-center">
        {" "}
        <DemoQuiz />
      </div>
    </main>
  );
};

export default HomePage;
