import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const TheatreList = ({ city }) => {
  const [theatres, setTheatres] = useState([]);

  useEffect(() => {
    if (city) {
      axios.get(`http://localhost:8080/api/theatres/city/${city}`)
        .then(res => setTheatres(res.data))
        .catch(err => console.error("Error fetching theatres:", err));
    }
  }, [city]);

  return (
    <Box mt={2}>
      <Typography variant="h6" gutterBottom>
        Theatres in {city}
      </Typography>
      <List>
        {theatres.map(theatre => (
          <ListItem key={theatre.id}>
            <ListItemText
              primary={theatre.name}
              secondary={theatre.address}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TheatreList;
