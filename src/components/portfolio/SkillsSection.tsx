import { Code, DataObject, Handyman } from "@mui/icons-material";
import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";
import { Section } from "../common/Section";

const categoryMeta = [
  {
    Icon: Code,
    accent: "#3B82F6",
    accentLight: "#60A5FA",
    glow: "rgba(59, 130, 246, 0.22)",
    chipHover: "rgba(59, 130, 246, 0.14)",
  },
  {
    Icon: DataObject,
    accent: "#14B8A6",
    accentLight: "#2DD4BF",
    glow: "rgba(20, 184, 166, 0.22)",
    chipHover: "rgba(20, 184, 166, 0.14)",
  },
  {
    Icon: Handyman,
    accent: "#F59E0B",
    accentLight: "#FBBF24",
    glow: "rgba(245, 158, 11, 0.22)",
    chipHover: "rgba(245, 158, 11, 0.14)",
  },
] as const;

export const SkillsSection = () => (
  <Section
    id="skills"
    title="Skills"
    centered
    subtitle="Technologies and tools I use to build modern, scalable, and user-friendly web applications."
    contentMaxWidth={980}
  >
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch",   // <-- cards ab same height le lenge
        gap: { xs: 2.5, md: 3 },
      }}
    >
      {skillCategories.map((category, index) => {
        const meta = categoryMeta[index] ?? categoryMeta[0];
        const { Icon, accent, accentLight, glow, chipHover } = meta;

        return (
          <Card
            key={category.category}
            component={motion.article}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.42, delay: index * 0.1, ease: "easeOut" }}
            sx={{
              width: { xs: "100%", sm: 340, md: 460 }, 
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: "0 0 auto 0",
                height: 3,
                background: `linear-gradient(90deg, ${accent}, ${accentLight})`,
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: -48,
                right: -48,
                width: 140,
                height: 140,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${glow} 0%, transparent 72%)`,
                pointerEvents: "none",
              },
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: `0 16px 40px ${glow}`,
                borderColor: `${accent}55`,
              },
            }}
          >
            <CardContent sx={{ p: { xs: 2.75, md: 3.25 }, height: "100%", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
              <Box sx={{ display: "flex", gap: 1.75, alignItems: "center" }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 2.5,
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                    background: `linear-gradient(145deg, ${accent}28, ${accentLight}12)`,
                    border: `1px solid ${accent}44`,
                    color: accentLight,
                    boxShadow: `0 10px 28px ${glow}`,
                  }}
                >
                  <Icon />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontSize: { xs: 17, md: 18.5 }, lineHeight: 1.25 }}>
                    {category.category}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "inline-block",
                      mt: 0.5,
                      px: 1,
                      py: 0.25,
                      borderRadius: 999,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      color: accentLight,
                      bgcolor: `${accent}18`,
                      border: `1px solid ${accent}33`,
                    }}
                  >
                    {category.items.length} skills
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 2.25, lineHeight: 1.75, minHeight: { md: 48 } }}>
                {category.description}
              </Typography>

              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: "auto", pt: 3 }}>
                {category.items.map((skill) => (
                  <Chip
                    key={skill._id}
                    label={skill.name}
                    size="small"
                    sx={{
                      fontWeight: 600,
                      fontSize: 12,
                      height: 30,
                      px: 0.25,
                      bgcolor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      transition: "all 0.22s ease",
                      "&:hover": {
                        bgcolor: chipHover,
                        borderColor: `${accent}66`,
                        color: accentLight,
                        transform: "translateY(-2px)",
                        boxShadow: `0 6px 16px ${glow}`,
                      },
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  </Section>
);