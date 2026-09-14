import { Code, DataObject, Handyman, School } from "@mui/icons-material";
import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { skillCategories } from "../../../data/skills";
import { Section } from "../../common/Section";
import { categoryCardStyle, categoryCountStyle, categoryIconStyle, skillChipStyle, skillsStyles } from "./SkillsSection.styles";

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
  {
    Icon: School,
    accent: "#A855F7",
    accentLight: "#C084FC",
    glow: "rgba(168, 85, 247, 0.22)",
    chipHover: "rgba(168, 85, 247, 0.14)",
  }
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
      sx={skillsStyles.grid}
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
            sx={categoryCardStyle(accent, accentLight, glow)}
          >
            <CardContent sx={skillsStyles.content}>
              <Box sx={skillsStyles.header}>
                <Box
                  sx={categoryIconStyle(accent, accentLight, glow)}
                >
                  <Icon />
                </Box>
                <Box>
                  <Typography variant="h6" sx={skillsStyles.categoryTitle}>
                    {category.category}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={categoryCountStyle(accent, accentLight)}
                  >
                    {category.items.length} skills
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={skillsStyles.description}>
                {category.description}
              </Typography>

              <Box sx={skillsStyles.tags}>
                {category.items.map((skill) => (
                  <Chip
                    key={skill._id}
                    label={skill.name}
                    icon={skill.icon ? <skill.icon color="default" size={18} title={skill.name} /> : undefined}
                    size="small"
                    sx={skillChipStyle(chipHover, accent, accentLight, glow)}
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