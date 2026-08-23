import { CalendarMonth, GitHub, Launch, WorkOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Chip, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { ContentItem } from "../../types/content";
import { Section } from "../common/Section";

type VerticalTimelineProps = {
  id: string;
  title: string;
  items: readonly ContentItem[];
  variant: "experience" | "education";
};

const formatRange = (start?: string, end?: string, current?: boolean) => {
  const startLabel = start ? new Date(start).getFullYear().toString() : "";
  const endLabel = current ? "Present" : end ? new Date(end).getFullYear().toString() : "Present";
  return [startLabel, endLabel].filter(Boolean).join(" - ");
};

const timelineColumn = { xs: "28px", md: "44px" };
const timelineCenter = { xs: 14, md: 22 };

const variantSubtitles = {
  education: "Academic journey and foundation in software engineering.",
  experience: "Professional experience building scalable products and growing as an engineer.",
};

export const VerticalTimeline = ({ id, title, items, variant }: VerticalTimelineProps) => (
  <Section
    id={id}
    title={title}
    centered
    subtitle={variantSubtitles[variant]}
    contentMaxWidth={820}
  >
    <Box sx={{ position: "relative" }}>
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          left: timelineCenter,
          top: 8,
          bottom: 8,
          width: 2,
          transform: "translateX(-50%)",
          borderRadius: 8,
          background: "linear-gradient(180deg, #60A5FA, #14B8A6, rgba(245,158,11,0.7))",
          zIndex: 0,
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {items.map((item, index) => {
          const heading = item.projectName || item.companyName || item.institutionName || item.title || title;
          const subheading = item.subtitle || item.position || item.degree || item.employmentType || item.fieldOfStudy;
          const range = formatRange(item.startDate, item.endDate, item.currentlyWorking);
          const hasLinks = Boolean(item.githubRepositoryUrl || item.liveDemoUrl);

          return (
            <Box
              key={item._id}
              component={motion.article}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.36, delay: index * 0.06 }}
              sx={{
                position: "relative",
                zIndex: 1,
                display: "grid",
                gridTemplateColumns: { xs: `${timelineColumn.xs} 1fr`, md: `${timelineColumn.md} 1fr` },
                gap: { xs: 2, md: 3 },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", pt: 3 }}>
                <Box
                  sx={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    bgcolor: "background.default",
                    border: "3px solid",
                    borderColor: variant === "experience" ? "primary.light" : "secondary.light",
                    boxShadow: "0 0 0 6px rgba(59,130,246,0.12)",
                    flexShrink: 0,
                  }}
                />
              </Box>
              <Card>
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", gap: 1.5 }}>
                    <Box>
                      <Box sx={{ display: "flex", gap: 1, alignItems: "center", color: "primary.light" }}>
                        {variant === "experience" ? <WorkOutlined fontSize="small" /> : <CalendarMonth fontSize="small" />}
                        <Typography variant="body2" color="text.secondary">{range}</Typography>
                      </Box>
                      <Typography variant="h5" sx={{ mt: 1, fontSize: { xs: 22, md: 26 } }}>{heading}</Typography>
                      {subheading ? <Typography variant="subtitle1" color="primary.light" sx={{ mt: 0.75, fontWeight: 700 }}>{subheading}</Typography> : null}
                    </Box>
                    {item.location ? <Chip label={item.location} size="small" sx={{ alignSelf: { xs: "flex-start", sm: "center" } }} /> : null}
                  </Box>
                  {item.description ? <Typography variant="body2" color="text.secondary" sx={{ mt: 2, lineHeight: 1.8 }}>{item.description}</Typography> : null}
                  {item.techStack?.length ? (
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 2.5 }}>
                      {item.techStack.map((tag) => <Chip key={tag} label={tag} size="small" />)}
                    </Box>
                  ) : null}
                  {hasLinks ? (
                    <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mt: 3 }}>
                      {item.liveDemoUrl ? <Button href={item.liveDemoUrl} target="_blank" rel="noreferrer" size="small" variant="outlined" startIcon={<Launch />}>Live</Button> : null}
                      {item.githubRepositoryUrl ? <Button href={item.githubRepositoryUrl} target="_blank" rel="noreferrer" size="small" color="secondary" variant="outlined" startIcon={<GitHub />}>Code</Button> : null}
                    </Box>
                  ) : null}
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Box>
    </Box>
  </Section>
);