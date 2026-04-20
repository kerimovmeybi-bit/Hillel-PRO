import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  TextField,
  MenuItem,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";

import Header from "../../components/Header";
import { fetchHotels } from "../../features/hotels/hotelsSlice";

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ ВОТ ОН

  const destinationsState = useSelector((s: any) => s.destinations);
  const destinations = Array.isArray(destinationsState?.list)
    ? destinationsState.list
    : [];

  const [destination, setDestination] = useState("");

  useEffect(() => {
    dispatch({ type: "DESTINATIONS_FETCH" });
  }, [dispatch]);

  const handleSubmit = () => {
    console.log("🔥 SUBMIT CLICK");
    console.log("RAW destination:", destination);

    if (!destination) {
      alert("Select destination");
      return;
    }

    dispatch(
      fetchHotels({
        destination: { label: destination },
      })
    );

    navigate("/hotels"); // ✅ ПЕРЕХОД БЕЗ ПЕРЕЗАГРУЗКИ
  };

  return (
    <>
      <Header />

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {/* DESTINATION */}
          <Grid item xs={3}>
            <TextField
              select
              label="Destination"
              fullWidth
              value={destination}
              onChange={(e) => {
                const value = e.target.value;
                console.log("SELECT CHANGE:", value);
                setDestination(value);
              }}
            >
              <MenuItem value="" disabled>
                Select
              </MenuItem>

              {destinations.map((d: any) => (
                <MenuItem key={d.id} value={d.label}>
                  {d.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* CHECK IN */}
          <Grid item xs={3}>
            <TextField
              type="date"
              fullWidth
              label="Check in"
              slotProps={{
                inputLabel: { shrink: true },
              }}
            />
          </Grid>

          {/* CHECK OUT */}
          <Grid item xs={3}>
            <TextField
              type="date"
              fullWidth
              label="Check out"
              slotProps={{
                inputLabel: { shrink: true },
              }}
            />
          </Grid>

          {/* ADULTS */}
          <Grid item xs={1}>
            <TextField type="number" label="Adults" fullWidth />
          </Grid>

          {/* CHILD */}
          <Grid item xs={1}>
            <TextField type="number" label="Child" fullWidth />
          </Grid>

          {/* BUTTON */}
          <Grid item xs={1}>
            <Button
              variant="contained"
              color="warning"
              fullWidth
              sx={{ height: "56px" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ mt: 5 }}>
          <Typography variant="h4">
            Travel With <span style={{ color: "orange" }}>Booking</span>
          </Typography>

          <Typography sx={{ mt: 2, color: "gray" }}>
            Lorem ipsum dolor sit amet...
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Main;