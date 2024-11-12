import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import "../css/candidateDetails.css"; // Import the new CSS file

const CandidateDetails = () => {
  const navigate = useNavigate();
  const { candidateId } = useParams();

  const [candidate, setCandidate] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const dummyCandidateData = {
      101: {
        id: "101",
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "+1234567890",
        skills: "React, Node.js, JavaScript",
        experience: "3 years of software development experience",
        resumeLink: "https://example.com/resume1.pdf",
        status: "Under Review",
      },
      102: {
        id: "102",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        contact: "+9876543210",
        skills: "Python, Machine Learning, Data Science",
        experience: "5 years in data analytics",
        resumeLink: "https://example.com/resume2.pdf",
        status: "Interview Scheduled",
      },
      201: {
        id: "201",
        name: "Michael Lee",
        email: "michael.lee@example.com",
        contact: "+1122334455",
        skills: "Java, Spring Boot, Microservices",
        experience: "4 years in backend development",
        resumeLink: "https://example.com/resume3.pdf",
        status: "Under Review",
      },
      202: {
        id: "202",
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        contact: "+9988776655",
        skills: "UI/UX Design, Adobe XD, Figma",
        experience: "2 years in UI/UX design",
        resumeLink: "https://example.com/resume4.pdf",
        status: "Rejected",
      },
    };

    setCandidate(dummyCandidateData[candidateId]);
    if (dummyCandidateData[candidateId]) {
      setStatus(dummyCandidateData[candidateId].status);
    }
  }, [candidateId]);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSaveStatus = () => {
    if (candidate) {
      const updatedCandidate = { ...candidate, status };
      alert("Candidate status updated successfully!");
      navigate("/candidates");
    }
  };

  if (!candidate) return <div>Loading...</div>;

  return (
    <div className="candidate-details-container">
      <h3>Candidate Details: {candidate.name}</h3>
      <p>Email: {candidate.email}</p>
      <p>Contact: {candidate.contact}</p>
      <p>Skills: {candidate.skills}</p>
      <p>Experience: {candidate.experience}</p>
      <Button
        onClick={() => window.open(candidate.resumeLink, "_blank")}
        variant="outlined"
      >
        View Resume
      </Button>

      <FormControl fullWidth margin="normal" className="status-dropdown">
        <InputLabel>Status</InputLabel>
        <Select value={status} onChange={handleStatusChange}>
          <MenuItem value="Under Review">Under Review</MenuItem>
          <MenuItem value="Interview Scheduled">Interview Scheduled</MenuItem>
          <MenuItem value="Hired">Hired</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </Select>
      </FormControl>

      <Button
        onClick={handleSaveStatus}
        variant="contained"
        color="primary"
        className="status-save-button"
      >
        Save Status
      </Button>
      <Button
        onClick={() => navigate("/")}
        variant="outlined"
        color="secondary"
        className="back-button"
      >
        Back to Jobs
      </Button>
    </div>
  );
};

export default CandidateDetails;
