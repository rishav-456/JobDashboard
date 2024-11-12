import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, List, ListItem, ListItemText } from '@mui/material';

function JobDetail() {
  const { id } = useParams();
  const candidates = [
    { id: 1, name: 'John Doe', status: 'Under Review' },
    { id: 2, name: 'Jane Smith', status: 'Interview Scheduled' },
  ];

  return (
    <div>
      <h2>Job Details - ID: {id}</h2>
      <h3>Candidates</h3>
      <List>
        {candidates.map(candidate => (
          <ListItem key={candidate.id}>
            <ListItemText primary={candidate.name} secondary={candidate.status} />
            <Button component={Link} to={`/candidate/${candidate.id}`} variant="contained">View</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default JobDetail;