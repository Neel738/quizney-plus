"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { IQuestions, quizQuestions } from "../_components/quiz/question";

export interface SessionState {
  questions: IQuestions[];
  addBooleanAnswer: (questionId: number, answer: boolean) => void;
  addMultipleAnswer: (questionId: number, answer: string) => void;
  booleanAnswers: Array<{ questionId: number; answer: boolean }>;
  multipleAnswers: Array<{ questionId: number; answer: string }>;
  resetSession: () => void;
  getQuestion: (questionId: number) => IQuestions | null;
}

const defaultState: SessionState = {
  booleanAnswers: [],
  multipleAnswers: [],
  questions: quizQuestions.questions,
  addBooleanAnswer: () => {},
  addMultipleAnswer: () => {},
  resetSession: () => {},
  getQuestion: () => null,
};

const SessionContext = createContext<SessionState>(defaultState);

export const useSession = () => useContext(SessionContext);

interface ProviderProps {
  children: ReactNode;
}

export const SessionProvider = ({ children }: ProviderProps) => {
  const [booleanAnswers, setBooleanAnswers] = useState<
    Array<{ questionId: number; answer: boolean }>
  >([]);

  const [multipleAnswers, setMultipleAnswers] = useState<
    Array<{ questionId: number; answer: string }>
  >([]);

  const addBooleanAnswer = (questionId: number, answer: boolean) => {
    const newAnswers = booleanAnswers.filter(
      (answer) => answer.questionId !== questionId
    );
    setBooleanAnswers([...newAnswers, { questionId, answer }]);
  };

  const addMultipleAnswer = (questionId: number, answer: string) => {
    const newAnswers = multipleAnswers.filter(
      (answer) => answer.questionId !== questionId
    );
    setMultipleAnswers([...newAnswers, { questionId, answer }]);
  };

  const resetSession = () => {
    setBooleanAnswers([]);
    setMultipleAnswers([]);
  };

  const getQuestion = (questionId: number) => {
    const q = quizQuestions.questions.find(
      (question) => question.id === questionId
    );
    return q ? q : null;
  };

  return (
    <SessionContext.Provider
      value={{
        questions: quizQuestions.questions,
        addBooleanAnswer,
        addMultipleAnswer,
        booleanAnswers,
        multipleAnswers,
        resetSession,
        getQuestion,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
