import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../css/candidates.css"; // Import custom CSS for styling

const CandidateList = () => {
  const navigate = useNavigate();

  const candidateData = {
    1: [
      {
        id: "101",
        name: "John Doe",
        status: "Under Review",
        applicationDate: "2024-10-15",
        resumeLink: "https://example.com/resume1.pdf",
      },
      {
        id: "102",
        name: "Jane Smith",
        status: "Interview Scheduled",
        applicationDate: "2024-10-16",
        resumeLink: "https://example.com/resume2.pdf",
      },
    ],
    2: [
      {
        id: "201",
        name: "Michael Lee",
        status: "Under Review",
        applicationDate: "2024-10-14",
        resumeLink: "https://example.com/resume3.pdf",
      },
      {
        id: "202",
        name: "Alice Johnson",
        status: "Rejected",
        applicationDate: "2024-10-12",
        resumeLink: "https://example.com/resume4.pdf",
      },
    ],
  };

  const [selectedJobId, setSelectedJobId] = useState("");
  const jobCandidates = candidateData[selectedJobId] || [];

  const handleJobChange = (event) => {
    setSelectedJobId(event.target.value);
  };

  const handleViewCandidate = (candidateId) => {
    navigate(`/candidate/${candidateId}`);
  };

  return (
    <div className="candidate-panel">
      <h3>Select a Job to View Candidates</h3>

      <FormControl
        fullWidth
        variant="outlined"
        style={{ marginBottom: "20px" }}
      >
        <InputLabel>Select a Job</InputLabel>
        <Select
          value={selectedJobId}
          onChange={handleJobChange}
          label="Select a Job"
        >
          <MenuItem value="">Select a job from the dropdown</MenuItem>
          <MenuItem value="1">Job ID 1: Software Engineer</MenuItem>
          <MenuItem value="2">Job ID 2: Data Scientist</MenuItem>
        </Select>
      </FormControl>

      {selectedJobId && (
        <div className="candidate-grid">
          {jobCandidates.map((candidate) => (
            <Card
              className="candidate-tile"
              key={candidate.id}
              variant="outlined"
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  {candidate.name}
                </Typography>
                <Typography color="textSecondary">
                  Applied on: {candidate.applicationDate}
                </Typography>
                <Typography
                  className={`status-label ${candidate.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {candidate.status}
                </Typography>
                <Button
                  onClick={() => handleViewCandidate(candidate.id)}
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "10px" }}
                >
                  View Details
                </Button>
                <Button
                  onClick={() => window.open(candidate.resumeLink, "_blank")}
                  variant="outlined"
                  color="secondary"
                  style={{ marginTop: "10px" }}
                >
                  View Resume
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CandidateList;
