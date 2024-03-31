"use client";
import { useSession } from "@/app/_context/SessionContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ResultsPage = () => {
  const { booleanAnswers, questions } = useSession();
  const router = useRouter();
  useEffect(() => {
    const isDone = booleanAnswers.length === questions.length;

    if (!isDone) {
      router.push("/");
    }
  }, []);

  return (
    <main className="flex flex-col my-10 max-w-screen w-full max-w-full   ">
      <div className="  flex flex-col gap-y-10 overflow-x-wrap w-full items-center">
        {" "}
        <div>
          <h1 className="text-2xl font-bold text-center">{"Your Results"}</h1>
          {booleanAnswers.map((answer, index) => (
            <p key={index}>
              {answer.questionId}: {answer.answer.toString()}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ResultsPage;
