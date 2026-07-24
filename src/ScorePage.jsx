import { questions } from "./Questions";
export default function ScorePage({ score }) {
    console.log("ScorePage rendered");
    console.log("score =", score);

    return (
  <div className="container">
    <div className="score-card">
      <h1>Quiz Completed 🎉</h1>

      <h2>
        {score} / {questions.length}
      </h2>

      <p>
        Success is built by what you do consistently, not occasionally.
      </p>
    </div>
  </div>
);
}