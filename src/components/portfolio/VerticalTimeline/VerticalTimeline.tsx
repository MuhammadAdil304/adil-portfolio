import { CalendarMonth, GitHub, Launch, WorkOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Chip, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { ContentItem } from "../../../types/content";
import { Section } from "../../common/Section";
import { markerStyle, timelineStyles } from "./VerticalTimeline.styles";

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
    <Box sx={timelineStyles.root}>
      <Box
        aria-hidden
        sx={timelineStyles.line}
      />
      <Box sx={timelineStyles.list}>
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
              sx={timelineStyles.item}
            >
              <Box sx={timelineStyles.markerWrap}>
                <Box sx={markerStyle(variant === "experience")} />
              </Box>
              <Card>
                <CardContent sx={timelineStyles.cardContent}>
                  <Box sx={timelineStyles.header}>
                    <Box sx={timelineStyles.identity}>
                      {item.companyLogo || item.institutionLogo ? (
                        <Box
                          component="img"
                          src={item.companyLogo || item.institutionLogo}
                          alt={`${heading} logo`}
                          sx={timelineStyles.logo}
                        />
                      ) : null}
                      <Box>
                        <Box sx={timelineStyles.date}>
                          {variant === "experience" ? <WorkOutlined fontSize="small" /> : <CalendarMonth fontSize="small" />}
                          <Typography variant="body2" color="text.secondary">{range}</Typography>
                        </Box>
                        <Typography variant="h5" sx={timelineStyles.heading}>{heading}</Typography>
                        {subheading ? <Typography variant="subtitle1" color="primary.light" sx={timelineStyles.subheading}>{subheading}</Typography> : null}
                      </Box>
                    </Box>
                    {item.location ? <Chip label={item.location} size="small" sx={timelineStyles.location} /> : null}
                  </Box>
                  {item.description ? <Typography variant="body2" color="text.secondary" sx={timelineStyles.description}>{item.description}</Typography> : null}
                  {item.techStack?.length ? (
                    <Box sx={timelineStyles.tags}>
                      {item.techStack.map((tag) => <Chip key={tag} label={tag} size="small" />)}
                    </Box>
                  ) : null}
                  {hasLinks ? (
                    <Box sx={timelineStyles.links}>
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