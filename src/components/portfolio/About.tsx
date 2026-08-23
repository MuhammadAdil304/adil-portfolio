import { Code, RocketLaunch, WorkspacePremium } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { aboutParagraphs } from "../../data/about";
import { Section } from "../common/Section";

const stats = [
  { label: "Core stack", value: "MERN" },
  { label: "UI focus", value: "React" },
  { label: "Recent role", value: "Nodshift" },
] as const;

export const About = () => (
  <Section id="about" title="About">
    <Card component={motion.article} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.45, ease: "easeOut" }}>
      <CardContent sx={{ p: { xs: 3, md: 4 }, display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" }, gap: { xs: 4, md: 6 } }}>
        <Box>
          <Box sx={{ display: "flex", gap: 1.25, alignItems: "center", color: "primary.light" }}>
            <Code fontSize="small" />
            <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: "0.18em" }}>
              Crafted in code
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ mt: 2, lineHeight: 1.25 }}>
            A focused developer summary that stays static and lightweight.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.25, color: "text.secondary" }}>
          {aboutParagraphs.map((paragraph) => (
            <Typography key={paragraph} variant="body1" sx={{ lineHeight: 1.8 }}>
              {paragraph}
            </Typography>
          ))}
          <Box sx={{ display: "flex", gap: 1.5, color: "secondary.light", alignItems: "center" }}>
            <RocketLaunch fontSize="small" />
            <WorkspacePremium fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              Practical frontend delivery, clean API integration, and reliable handoff.
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  </Section>
);
