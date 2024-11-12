import React from 'react';
import { TextField, Button, List, ListItem } from '@mui/material';

function AssessmentForm() {
  const [questions, setQuestions] = React.useState([]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { text: '', options: [] }]);
  };

  return (
    <div>
      <Button onClick={handleAddQuestion} variant="contained">Add Question</Button>
      <List>
        {questions.map((question, index) => (
          <ListItem key={index}>
            <TextField label="Question Text" variant="outlined" fullWidth />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default AssessmentForm;
