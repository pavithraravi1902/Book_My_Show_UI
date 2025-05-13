import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/hotel-booking`)
      .then((res) => setHotels(res.data))
      .catch((err) => console.error("Error fetching hotels:", err));
  }, []);

  const handleBookNow = (hotel) => {
      navigate("/hotel-booking", { state: { hotel } });
  };

  return (
    <Box sx={{ backgroundColor: "#2d6a9f", minHeight: "100vh", py: 5, px: 2 }}>
      <Typography
        variant="h5"
        sx={{
          color: "#ffffff",
          mb: 4,
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        Book Hotels
      </Typography>

      {hotels.map((hotel) => (
        <Card
          key={hotel.id}
          sx={{
            display: "flex",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            border: "1px solid #dcdcdc",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
            mb: 3,
            mx: "auto",
            maxWidth: 800,
            transition: "0.3s",
            "&:hover": {
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 200, height: "100%", objectFit: "cover" }}
            image={"/Images/hilton.jpg"}
            alt={hotel.name}
          />

          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: "#003366", fontWeight: 600 }}>
                {hotel.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#333", mt: 1 }}>
                City: {hotel.city}
              </Typography>
              <Typography variant="body2" sx={{ color: "#333" }}>
                Address: {hotel.address}
              </Typography>
              <Typography variant="body2" sx={{ color: "#333" }}>
                Available Rooms: {hotel.availableRooms}
              </Typography>
              <Typography variant="body2" sx={{ color: "#333", mt: 1 }}>
  Price: ${hotel.price}
</Typography>
              <Button
                variant="contained"
                color="primary"
                backgroundColor = "#003366"
                sx={{ mt: 2 }}
                onClick={() => handleBookNow(hotel)}
              >
                Book Now
              </Button>
            </CardContent>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default HotelList;
