import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { contentWidthStyle, sectionStyles } from "./Section.styles";
export const sectionHeadingColor = "secondary.light";
type SectionProps = PropsWithChildren<{ id?: string; title: string; centered?: boolean; subtitle?: string; contentMaxWidth?: number | string }>;
export const Section = ({ id, title, children, centered = false, subtitle, contentMaxWidth }: SectionProps) => (
  <Box component="section" id={id} sx={sectionStyles.root}>
    <Container maxWidth="lg">
      <Box component={motion.div} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.4 }} sx={[sectionStyles.heading, centered && sectionStyles.centeredHeading]}>
        <Typography variant="h3" sx={sectionStyles.title}>{title}</Typography>
        {subtitle ? <Typography variant="body1" color="text.secondary" sx={[sectionStyles.subtitle, centered && sectionStyles.centeredSubtitle]}>{subtitle}</Typography> : null}
      </Box>
      <Box sx={contentWidthStyle(contentMaxWidth)}>{children}</Box>
    </Container>
  </Box>
);
