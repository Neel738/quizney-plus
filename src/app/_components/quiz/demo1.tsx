"use client";
import Quiz from "react-quiz-component";
import { quiz } from "./raw";
import CustomResultPage from "./results";

export const DemoQuiz = () => {
  const setQuizResult = (obj: any) => {};
  const renderCustomResultPage = (obj: any) => {
    console.log(obj);
    return <CustomResultPage obj={obj} />;
  };

  return (
    <Quiz
      quiz={quiz}
      showInstantFeedback={false}
      showDefaultResult={false}
      customResultPage={renderCustomResultPage}
      onComplete={setQuizResult}
      disableSynopsis={true}
    />
  );
};
