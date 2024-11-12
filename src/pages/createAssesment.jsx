import React, { useState } from "react";
import { useParams } from "react-router-dom";

const AddQuestions = ({ jobId }) => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]); // Default to 4 options
  const [correctOptions, setCorrectOptions] = useState([]); // Array to hold correct answers for each option

  const handleAddOption = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleToggleCorrectOption = (index) => {
    if (correctOptions.includes(index)) {
      setCorrectOptions(correctOptions.filter((opt) => opt !== index)); // Uncheck if already selected
    } else {
      setCorrectOptions([...correctOptions, index]); // Add new correct option
    }
  };

  const handleAddQuestion = () => {
    if (!newQuestion.trim() || options.some((opt) => !opt.trim())) {
      alert("Please fill in the question and all options");
      return;
    }

    if (correctOptions.length === 0) {
      alert("Please select at least one correct option");
      return;
    }

    const newQuestionData = {
      question: newQuestion,
      options: options.map((opt, idx) => ({
        text: opt,
        isCorrect: correctOptions.includes(idx),
      })),
    };

    setQuestions([...questions, newQuestionData]);
    setNewQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectOptions([]);
  };

  const handleSaveQuestions = () => {
    const savedAssignments = JSON.parse(
      localStorage.getItem("assignments") || "{}"
    );
    savedAssignments[jobId] = questions;
    localStorage.setItem("assignments", JSON.stringify(savedAssignments));
    alert("Questions saved successfully!");
  };

  return (
    <div>
      <h2>Add Questions for Job {jobId}</h2>

      <div>
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Enter question"
        />
        {options.map((option, index) => (
          <div
            key={index}
            style={{ display: "flex", alignItems: "center", margin: "8px 0" }}
          >
            <input
              type="text"
              value={option}
              onChange={(e) => handleAddOption(index, e.target.value)}
              placeholder={`Option ${index + 1}`}
            />
            <input
              type="checkbox"
              checked={correctOptions.includes(index)}
              onChange={() => handleToggleCorrectOption(index)}
              style={{ marginLeft: "8px" }}
            />
            <label style={{ marginLeft: "4px" }}>Correct</label>
          </div>
        ))}
        <button type="button" onClick={handleAddQuestion}>
          Add Question
        </button>
      </div>

      <h3>Current Questions</h3>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            <strong>{q.question}</strong>
            <ul>
              {q.options.map((opt, i) => (
                <li key={i}>
                  {opt.text} {opt.isCorrect ? "(Correct)" : ""}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <button onClick={handleSaveQuestions}>Save Questions</button>
    </div>
  );
};

export default AddQuestions;
