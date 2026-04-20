import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Rating,
  TextField,
  MenuItem,
} from "@mui/material";

import Header from "../../components/Header";

const Hotels = () => {
  const hotels = useSelector((s: any) => s.hotels.list);

  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  const navigate = useNavigate(); // ✅ НАВИГАЦИЯ

  //  поиск + сортировка
  const filteredHotels = hotels
    .filter((hotel: any) =>
      hotel.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a: any, b: any) => {
      if (sort === "low") return (a.price || 120) - (b.price || 120);
      if (sort === "high") return (b.price || 120) - (a.price || 120);
      return 0;
    });

  return (
    <>
      <Header />

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Hotels
        </Typography>

        {/* SEARCH + SORT */}
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <TextField
            label="Search hotel"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <TextField
            select
            label="Sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            sx={{ minWidth: 200 }}
          >
            <MenuItem value="">Default</MenuItem>
            <MenuItem value="low">Price: Low → High</MenuItem>
            <MenuItem value="high">Price: High → Low</MenuItem>
          </TextField>
        </Box>

        {/* CARDS */}
        <Grid container spacing={3}>
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel: any) => (
              <Grid item xs={12} md={6} lg={4} key={hotel.id}>
                <Card
                  onClick={() => navigate(`/hotels/${hotel.id}`)} // ✅ КЛИК
                  sx={{
                    cursor: "pointer",
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={
                      hotel.image ||
                      "https://source.unsplash.com/400x300/?hotel"
                    }
                    alt={hotel.name}
                  />

                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {hotel.name}
                    </Typography>

                    <Typography color="gray" sx={{ mb: 1 }}>
                       {hotel.city}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Rating
                        value={hotel.rating || 4}
                        precision={0.5}
                        readOnly
                      />
                      <Typography sx={{ ml: 1 }}>
                        {hotel.rating || 4}
                      </Typography>
                    </Box>

                    <Typography variant="h6" color="orange">
                      ${hotel.price || 120} / night
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Box sx={{ textAlign: "center", mt: 5, width: "100%" }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                 No hotels found
              </Typography>

              <Typography color="gray">
                Try another search
              </Typography>
            </Box>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Hotels;