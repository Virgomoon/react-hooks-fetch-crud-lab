import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, onDelete, onUpdate}) {
// console.log(questions)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question)=>{
        return(
          <QuestionItem 
            key={question.id}
            question={question}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        )
      })}</ul>
    </section>
  );
}

export default QuestionList;
