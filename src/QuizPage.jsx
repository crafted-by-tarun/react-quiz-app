import {questions} from "./Questions";
import{useState} from 'react';
export default function QuizPage({score,setScore,setQuizOver}){
const [index,setIndex] = useState(0);
const [answers,setAnswers] = useState(Array(questions.length).fill(""));
function submit_quiz_handler(){
    let finalscore = 0;
    for(let i=0;i<questions.length;i++){
        if(answers[i]===questions[i].answer)finalscore+=1;
    }
        console.log(finalscore);
    setScore(finalscore);
    setQuizOver(true);
}

function out_of_bound_1(){
    if(index===0) return true;
    return false;
}
function out_of_bound_2(){
    if(index===questions.length-1) return true;
    return false;
}
function increment(){
    setIndex(index+1);
}
function decrement(){
    setIndex(index-1);
}
function radio_handler(option){
let newAnswers = [...answers];
newAnswers[index] = option;
    setAnswers(newAnswers);
}
function disable_submit(){
    let should_disabled = false;
    for(let i=0;i<answers.length;i++){
        if(answers[i]===""){ should_disabled = true;
            break;
        }
    }
    return should_disabled;
}
let option_content = questions[index].options.map(option=>
    <div className="option" key={option}>

    <label>

      <input

        type="radio"

        name="answer"

        value={option}
        checked={answers[index] === option}
        onChange={()=>radio_handler(option)}
        
      />

      {option}

    </label>

  </div>


)
   return (
  <div className="container">
    <div className="quiz-card">
      <h1>React Quiz</h1>

      <h2>
        Question {index + 1} of {questions.length}
      </h2>

      <div className="question">
        {questions[index].question}
      </div>

      <div className="options">
        {option_content}
      </div>

      <div className="buttons">
        <button onClick={decrement} disabled={out_of_bound_1()}>
          Prev
        </button>

        <button onClick={increment} disabled={out_of_bound_2()}>
          Next
        </button>
      </div>

      <button
        className="submit-btn"
        onClick={submit_quiz_handler}
        disabled={disable_submit()}
      >
        Submit Quiz
      </button>
    </div>
  </div>
);
}