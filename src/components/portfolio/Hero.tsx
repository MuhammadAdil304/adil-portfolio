import { ArrowForward, Download, WorkOutlined } from "@mui/icons-material";
import { Box, Button, Chip, Container, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { heroActions, heroHighlights } from "../../data/hero";
const hero_img = "/hero_img.png";

export const Hero = () => {
  const name = "Muhammad Adil";
  const role = "Full Stack Developer";
  const intro = "I build clean, fast, and production-ready developer portfolios with a focus on clarity, usability, and strong execution.";
  return (
    <Box component="section" id="top" sx={{ minHeight: "84vh", display: "flex", alignItems: "center", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg" sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.1fr 0.9fr" }, alignItems: "center", gap: { xs: 6, md: 8 } }}>
        <Box component={motion.div} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant="overline" color="primary.light" sx={{ fontWeight: 800, letterSpacing: "0.18em" }}>
            Hi, I am
          </Typography>
          <Typography variant="h3" sx={{ maxWidth: 760, mt: 1, fontSize: { xs: 44, sm: 62, md: 72 }, lineHeight: 1.02 }}>
            {name}
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mt: 2, fontWeight: 700 }}>{role}</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 3, maxWidth: 680, fontSize: { xs: 17, md: 19 }, lineHeight: 1.8 }}>
            {intro}
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mt: 4 }}>
            {heroActions.map((link) => (
              <Button target="_blank" key={link.label} href={link.href} variant={link.variant === "primary" ? "contained" : "outlined"} endIcon={link.variant === "primary" ? <ArrowForward /> : <WorkOutlined />}>
                {link.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: 1.25, flexWrap: "wrap", mt: 4 }}>
            {heroHighlights.map((item) => <Chip key={item} label={item} />)}
          </Box>
        </Box>
        <Box>
          <img src={hero_img} alt="my picture" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.16)", }} />
        </Box>
      </Container>
    </Box>
  );
};
