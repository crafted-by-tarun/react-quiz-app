import { useState } from 'react';
import ScorePage from './ScorePage';
import QuizPage from'./QuizPage';

export default function App(){
  const [score,setScore]  = useState(0);
  const [quizover,setQuizOver] = useState(false);
  // return (
  // quizover ?  <ScorePage score = {score}></ScorePage>:<QuizPage score = {score} setScore = {setScore} setQuizOver = {setQuizOver}></QuizPage>
  // );

  return (
  quizover
    ? <ScorePage score = {score}></ScorePage>
    : <QuizPage
        score={score}
        setScore={setScore}
        setQuizOver={setQuizOver}
      />
);
  
}