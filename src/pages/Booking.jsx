import { Box, Typography, TextField, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Booking = () => {
  const { state } = useLocation();
  const { hotel } = state || {};
  const [numRooms, setNumRooms] = useState(1);

  const totalAmount = numRooms * hotel.price;

  const handleBooking = () => {
    console.log("Booking details:", {
      hotelId: hotel.id,
      numRooms,
      totalAmount,
    });
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Book Hotel: {hotel.name}
      </Typography>
      <Typography>City: {hotel.city}</Typography>
      <Typography>Price per Room: ${hotel.price}</Typography>

      <TextField
        label="Number of Rooms"
        type="number"
        value={numRooms}
        onChange={(e) => setNumRooms(Number(e.target.value))}
        sx={{ mt: 2 }}
        inputProps={{ min: 1, max: hotel.availableRooms }}
      />

      <Typography sx={{ mt: 2 }}>
        Total Amount: ${totalAmount}
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleBooking}
      >
        Confirm Booking
      </Button>
    </Box>
  );
};

export default Booking;
