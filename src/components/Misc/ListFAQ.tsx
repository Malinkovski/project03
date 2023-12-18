import React from "react";
import { QuestionProps } from "../../properties/pageprops";

const ListFAQ = ({ questions }: QuestionProps) => {
  return (
    <div className="content">
      <div className="faq-questions">
        <ul>
          {questions.map((question, index) => (
            <li key={question.id}>
              <div className="inner-content-text">
                <div className="question-title">
                  <h3>
                    {index + 1}
                    {". "}
                  </h3>
                  <h4>{question.question}</h4>
                </div>
                <p>{question.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListFAQ;
