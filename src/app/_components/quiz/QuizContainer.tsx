import { useSession } from "@/app/_context/SessionContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { quizQuestions } from "./question";

const QuestionContainer = (props: {
  id: number;
  handleNextQuestion: () => void;
}) => {
  const { id } = props;
  const { addBooleanAnswer, getQuestion } = useSession();
  const question = getQuestion(id);
  if (!question) {
    return null;
  }
  const { questionTrueFalseVersion } = question;

  const handleAnswer = (answer: boolean) => {
    addBooleanAnswer(id, answer);
    props.handleNextQuestion();
  };

  return (
    <div className="flex flex-col items-center justify-center  w-full min-h-[50vh] gap-y-20 px-4">
      <h1 className="text-2xl font-bold text-center">
        {questionTrueFalseVersion}
      </h1>
      <div className="flex flex-row gap-x-5 max-w-[85vw]">
        <button
          className="w-40 h-10 rounded-xl bg-green-500 text-white text-xl font-bold"
          onClick={() => handleAnswer(true)}
        >
          Yes
        </button>
        <button
          className="w-40 h-10 rounded-xl bg-red-500 text-white text-xl font-bold"
          onClick={() => handleAnswer(false)}
        >
          No
        </button>
      </div>
    </div>
  );
};

export const QuizContainer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [progress, setProgress] = useState(0);
  const { booleanAnswers } = useSession();
  const [isDone, setIsDone] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (isNaN(booleanAnswers.length) || booleanAnswers.length === 0) {
      return;
    }
    const ratio = booleanAnswers.length / quizQuestions.questions.length;
    if (ratio === 1) {
      setIsDone(true);
      router.push("/results");
    }
    setProgress(ratio * 100);
  }, [currentQuestion, booleanAnswers]);

  const nav = (prev: boolean) => {
    if (prev) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleAnswer = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className=" min-w-[85vw] flex flex-col items-center justify-between gap-y-3">
      <QuestionContainer
        id={currentQuestion}
        handleNextQuestion={handleAnswer}
      />{" "}
      {currentQuestion > 0 && (
        <div className="flex flex-row gap-x-5">
          <button
            className="w-20 rounded-xl bg-blue-500 text-white text-sm "
            onClick={() => nav(true)}
            disabled={currentQuestion === 0}
          >
            {"back"}
          </button>
        </div>
      )}
      {progress > 0 && progress < 100 && (
        <div className="w-full max-w-[200px] bg-gray-300 h-2 ">
          <div
            className="bg-green-500 h-2 rounded-2xl w-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};
