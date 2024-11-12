import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

function Assignment() {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]); // Default to 4 options
  const [correctOptions, setCorrectOptions] = useState([]); // Stores indexes of correct options
  const [marks, setMarks] = useState("");
  const navigate = useNavigate();

  // Get jobId from URL parameters
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const jobId = urlParams.get("jobId");

  // Load questions from localStorage on component mount
  useEffect(() => {
    const savedAssignments = JSON.parse(
      localStorage.getItem("assignments") || "{}"
    );
    if (savedAssignments[jobId]) {
      setQuestions(savedAssignments[jobId]);
    }
  }, [jobId]);

  // Handle question text change
  const handleQuestionChange = (e) => setQuestionText(e.target.value);

  // Handle options change
  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  // Toggle correct option selection
  const handleCorrectOptionToggle = (index) => {
    setCorrectOptions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Add question to list
  const handleAddQuestion = () => {
    if (!questionText || correctOptions.length === 0 || !marks) {
      alert("Please fill all fields and select at least one correct option");
      return;
    }

    const newQuestion = {
      questionText,
      options,
      correctOptions,
      marks: parseInt(marks, 10),
    };
    setQuestions([...questions, newQuestion]);
    setQuestionText("");
    setOptions(["", "", "", ""]);
    setCorrectOptions([]);
    setMarks("");
  };

  // Save questions to localStorage with jobId
  const handleSaveQuestions = () => {
    const savedAssignments = JSON.parse(
      localStorage.getItem("assignments") || "{}"
    );
    savedAssignments[jobId] = questions;
    localStorage.setItem("assignments", JSON.stringify(savedAssignments));

    // Update the `hasQuestionsSaved` attribute for the job in `jobs`
    const jobs = JSON.parse(localStorage.getItem("jobs") || "[]");
    const updatedJobs = jobs.map((job) => {
      if (job.id == jobId) {
        console.log("reacjersdsdsa");
        return { ...job, hasQuestionsSaved: true };
      }
      console.log("reacjersdssdfdsfdslxkfvdklsnfkdslngvklsdfnv");
      return job;
    });

    // Save the updated jobs array back to localStorage
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));

    alert("Questions saved successfully!");
    navigate("/");
  };

  // Remove question from the list
  const handleRemoveQuestion = (index) =>
    setQuestions(questions.filter((_, i) => i !== index));

  return (
    <div>
      <h2>Assign Test Questions</h2>

      <div>
        <TextField
          label="Question"
          fullWidth
          value={questionText}
          onChange={handleQuestionChange}
          margin="normal"
        />

        <div>
          {options.map((option, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <Checkbox
                checked={correctOptions.includes(index)}
                onChange={() => handleCorrectOptionToggle(index)}
                color="primary"
              />
              <TextField
                label={`Option ${index + 1}`}
                fullWidth
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                margin="normal"
              />
            </div>
          ))}
        </div>

        <TextField
          label="Marks"
          type="number"
          fullWidth
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          margin="normal"
        />
        <Button
          onClick={handleAddQuestion}
          variant="contained"
          color="primary"
          fullWidth
        >
          Add Question
        </Button>
      </div>

      <h3>Current Questions</h3>
      <List>
        {questions.map((question, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`Q${index + 1}: ${question.questionText} (Marks: ${
                question.marks
              })`}
              secondary={`Options: ${question.options.join(
                ", "
              )} | Correct Options: ${question.correctOptions
                .map((i) => `Option ${i + 1}`)
                .join(", ")}`}
            />
            <IconButton edge="end" onClick={() => handleRemoveQuestion(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      <Button
        onClick={handleSaveQuestions}
        variant="contained"
        color="secondary"
        fullWidth
      >
        Save Questions
      </Button>
    </div>
  );
}

export default Assignment;
