import { Box, Container, Link, Typography } from "@mui/material";

export const Footer = () => (
  <Box component="footer" sx={{ borderTop: "1px solid", borderColor: "divider", py: 4 }}>
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "center" }, gap: 1.5 }}>
        <Typography variant="body2" color="text.secondary">
          {new Date().getFullYear()} Muhammad Adil. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Designed & Developed by Muhammad Adil
        </Typography>

      </Box>
    </Container>
  </Box>
);
