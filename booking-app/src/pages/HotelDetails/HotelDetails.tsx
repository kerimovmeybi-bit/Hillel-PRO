import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Container,
  Typography,
  Box,
  Rating,
} from "@mui/material";

import Header from "../../components/Header";

const HotelDetails = () => {
  const { id } = useParams();

  const hotels = useSelector((s: any) => s.hotels.list);

  const hotel = hotels.find((h: any) => h.id.toString() === id);

  if (!hotel) {
    return (
      <>
        <Header />
        <Container sx={{ mt: 4 }}>
          <Typography>Hotel not found</Typography>
        </Container>
      </>
    );
  }

  return (
    <>
      <Header />

      <Container sx={{ mt: 4 }}>
        <Box>
          {/* IMAGE */}
          <img
            src={
              hotel.image ||
              "https://source.unsplash.com/800x400/?hotel"
            }
            alt={hotel.name}
            style={{
              width: "100%",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />

          {/* NAME */}
          <Typography variant="h4" fontWeight="bold">
            {hotel.name}
          </Typography>

          {/* CITY */}
          <Typography color="gray" sx={{ mb: 2 }}>
             {hotel.city}
          </Typography>

          {/* RATING */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Rating
              value={hotel.rating || 4}
              precision={0.5}
              readOnly
            />
            <Typography sx={{ ml: 1 }}>
              {hotel.rating || 4}
            </Typography>
          </Box>

          {/* PRICE */}
          <Typography variant="h5" color="orange" sx={{ mb: 2 }}>
            ${hotel.price || 120} / night
          </Typography>

          {/* DESCRIPTION */}
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Comfortable rooms, great location, and amazing service.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default HotelDetails;