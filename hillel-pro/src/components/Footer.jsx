import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box textAlign="center" p={2} bgcolor="#eee">
      <Typography>
      GitHub:{" "}
        <a href="https://github.com/kerimovmeybi-bit" target="_blank">
          github.com/kerimovmeybi-bit
        </a>
      </Typography>
      <Typography>
        📱 Телефон: 
        <a href="tel:+380633170279">
          +380-63-317-02-79
        </a>
      </Typography>
    </Box>
  );
}