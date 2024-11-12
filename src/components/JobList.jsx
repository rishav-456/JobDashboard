import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Switch,
  FormControlLabel,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import "../css/jobList.css"; // Import the CSS file for styling

function JobList() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState(() => {
    const storedJobs = localStorage.getItem("jobs");
    return storedJobs ? JSON.parse(storedJobs) : [];
  });
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);
  const [newJob, setNewJob] = useState({
    title: "",
    description: "",
    type: "Full-time",
    package: "",
    acceptingApplications: true,
    hasQuestionsSaved: false,
  });
  const [underAssessmentJobs, setUnderAssessmentJobs] = useState(() => {
    const storedUnderAssessmentJobs = localStorage.getItem(
      "underAssessmentJobs"
    );
    try {
      return storedUnderAssessmentJobs
        ? JSON.parse(storedUnderAssessmentJobs)
        : [];
    } catch (error) {
      console.error(
        "Error parsing underAssessmentJobs from localStorage:",
        error
      );
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    localStorage.setItem(
      "underAssessmentJobs",
      JSON.stringify(underAssessmentJobs)
    );
  }, [underAssessmentJobs]);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditClose = () => setEditOpen(false);

  const handleEditOpen = (job) => {
    setCurrentJob(job);
    setNewJob({ ...job });
    setEditOpen(true);
  };
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setNewJob({
      ...newJob,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddJob = () => {
    const updatedJobs = [...jobs, { id: jobs.length + 1, ...newJob }];
    setJobs(updatedJobs);
    setNewJob({
      title: "",
      description: "",
      type: "Full-time",
      package: "",
      acceptingApplications: true,
      hasQuestionsSaved: false,
    });
    handleClose();
  };

  const handleEditJob = () => {
    const updatedJobs = jobs.map((job) =>
      job.id === currentJob.id ? { ...job, ...newJob } : job
    );
    setJobs(updatedJobs);
    setNewJob({
      title: "",
      description: "",
      type: "Full-time",
      package: "",
      acceptingApplications: true,
      hasQuestionsSaved: false,
    });
    handleEditClose();
  };

  const handleRemoveJob = (id) => setJobs(jobs.filter((job) => job.id !== id));
  const handleStopApplications = (id) =>
    setJobs(
      jobs.map((job) =>
        job.id === id ? { ...job, acceptingApplications: false } : job
      )
    );

  const handleAssignTestQuestions = (jobId) => {
    navigate(`/assignment?jobId=${jobId}`);
    setJobs(
      jobs.map((job) =>
        job.id === jobId ? { ...job, hasQuestionsSaved: true } : job
      )
    );
  };

  const handleMoveToUnderAssessment = (jobId) => {
    const jobToMove = jobs.find((job) => job.id === jobId);
    if (jobToMove) {
      setUnderAssessmentJobs([...underAssessmentJobs, jobToMove]);
      setJobs(jobs.filter((job) => job.id !== jobId));
      alert("Job moved to Under Assessment!");
    }
  };

  const activeJobs = jobs.filter((job) => job.acceptingApplications);
  const inactiveJobs = jobs.filter((job) => !job.acceptingApplications);

  return (
    <div className="job-list-page">
      {/* Add Job Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Job</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Job Title"
            type="text"
            fullWidth
            value={newJob.title}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Job Description"
            type="text"
            fullWidth
            value={newJob.description}
            onChange={handleChange}
            multiline
            rows={4}
          />
          <Select
            label="Job Type"
            name="type"
            value={newJob.type}
            onChange={handleChange}
            fullWidth
            margin="dense"
          >
            <MenuItem value="full-time">Full-time</MenuItem>
            <MenuItem value="internship">Internship</MenuItem>
            <MenuItem value="part-time">Part-time</MenuItem>
          </Select>
          <TextField
            margin="dense"
            name="package"
            label="Stipend/Package"
            type="number"
            fullWidth
            value={newJob.package}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={newJob.acceptingApplications}
                onChange={handleChange}
                name="acceptingApplications"
              />
            }
            label="Accepting Applications"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddJob} color="primary">
            Add Job
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Job Dialog */}
      <Dialog open={editOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Job</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Job Title"
            type="text"
            fullWidth
            value={newJob.title}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Job Description"
            type="text"
            fullWidth
            value={newJob.description}
            onChange={handleChange}
            multiline
            rows={4}
          />
          <TextField
            margin="dense"
            name="type"
            label="Job Type"
            type="text"
            fullWidth
            value={newJob.type}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="package"
            label="Stipend/Package"
            type="text"
            fullWidth
            value={newJob.package}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={newJob.acceptingApplications}
                onChange={handleChange}
                name="acceptingApplications"
              />
            }
            label="Accepting Applications"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditJob} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <div className="panel">
        <div className="job-dashboard-header">Job Dashboard</div>
        <Button className="add-job-button" onClick={handleClickOpen}>
          Add New Job
        </Button>

        {/* Active Jobs Section */}
        <div className="section">
          <h3>Active Jobs</h3>
          {activeJobs.length > 0 ? (
            <List>
              {activeJobs.map((job) => (
                <div key={job.id} className="job-tile">
                  <div className="job-tile-title">
                    {job.title} ({job.type})
                  </div>
                  <div className="job-tile-description">
                    Description: {job.description} | Package: {job.package}
                  </div>
                  <Button onClick={() => handleEditOpen(job)} color="secondary">
                    Edit
                  </Button>
                  <Button onClick={() => handleRemoveJob(job.id)} color="error">
                    Remove
                  </Button>
                  <Button
                    onClick={() => handleStopApplications(job.id)}
                    color="warning"
                  >
                    Stop Applications
                  </Button>
                </div>
              ))}
            </List>
          ) : (
            <Typography variant="body2" color="textSecondary">
              No active jobs available.
            </Typography>
          )}
        </div>

        {/* Inactive Jobs Section */}
        <div className="section">
          <h3>Inactive Jobs</h3>
          {inactiveJobs.length > 0 ? (
            <List>
              {inactiveJobs.map((job) => (
                <div key={job.id} className="job-tile">
                  <div className="job-tile-title">
                    {job.title} ({job.type})
                  </div>
                  <div className="job-tile-description">
                    Description: {job.description} | Package: {job.package}
                  </div>
                  <Button onClick={() => handleEditOpen(job)} color="secondary">
                    Edit
                  </Button>
                  <Button onClick={() => handleRemoveJob(job.id)} color="error">
                    Remove
                  </Button>
                  {job.hasQuestionsSaved ? (
                    <Button
                      onClick={() => handleMoveToUnderAssessment(job.id)}
                      color="success"
                    >
                      Invite Candidates
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleAssignTestQuestions(job.id)}
                      variant="contained"
                    >
                      Assign Test Questions
                    </Button>
                  )}
                </div>
              ))}
            </List>
          ) : (
            <Typography variant="body2" color="textSecondary">
              No inactive jobs available.
            </Typography>
          )}
        </div>

        {/* Under Assessment Jobs Section */}
        <div className="section">
          <h3>Under Assessment Jobs</h3>
          {underAssessmentJobs.length > 0 ? (
            <List>
              {underAssessmentJobs.map((job) => (
                <div key={job.id} className="job-tile">
                  <div className="job-tile-title">
                    {job.title} ({job.type})
                  </div>
                  <div className="job-tile-description">
                    Description: {job.description} | Package: {job.package}
                  </div>
                </div>
              ))}
            </List>
          ) : (
            <Typography variant="body2" color="textSecondary">
              No jobs under assessment.
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobList;
