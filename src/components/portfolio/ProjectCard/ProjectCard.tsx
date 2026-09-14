import { useState, useRef, useLayoutEffect } from "react";
import { Chip, Box, Typography, Button, Card, CardContent, CardMedia, CardActions } from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { motion } from "framer-motion";
import type { Project } from "../../../data/projects";
import { descriptionStyle, projectCardStyles } from "./ProjectCard.styles";

const MAX_LINES = 4;

export const ProjectCard = ({ project }: { project: Project }) => {
  const techStack = project.techStack;
  const hasGitHub = Boolean(project.githubRepositoryUrl);
  const hasLiveDemo = Boolean(project.liveDemoUrl);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const element = textRef.current;

    if (!element || !project.description) {
      setIsTruncated(false);
      setIsExpanded(false);
      return;
    }

    const updateTruncation = () => {
      const styles = window.getComputedStyle(element);
      const lineHeight = parseFloat(styles.lineHeight);
      const maxCollapsedHeight = lineHeight * MAX_LINES;

      setIsTruncated(element.scrollHeight - maxCollapsedHeight > 1);
    };

    setIsExpanded(false);
    updateTruncation();

    const resizeObserver = new ResizeObserver(updateTruncation);
    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, [project.description]);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      sx={projectCardStyles.card}
    >
      {project.projectImage ? (
        <CardMedia
          component="img"
          height="300"
          image={project.projectImage}
          alt={project.projectName || "Project"}
          sx={projectCardStyles.media}
        />
      ) : (
        <Box
          sx={projectCardStyles.noMedia}
        >
          <Typography variant="body2" sx={projectCardStyles.noMediaText}>
            {project.projectName || "No project image available"}
          </Typography>
        </Box>
      )}

      <CardContent sx={projectCardStyles.content}>
        <Typography variant="h5" sx={projectCardStyles.title}>
          {project.projectName}
        </Typography>

        {project.subtitle && (
          <Typography
            variant="subtitle2"
            color="primary.light"
            sx={projectCardStyles.subtitle}
          >
            {project.subtitle}
          </Typography>
        )}

        <Box sx={projectCardStyles.descriptionWrapper}>
          {project.description && (
            <Typography
              ref={textRef}
              variant="body2"
              sx={descriptionStyle(isExpanded)}
            >
              {project.description}
            </Typography>
          )}
          {project.description && (isTruncated || isExpanded) && (
            <Button
              variant="text"
              size="small"
              onClick={toggleExpand}
              sx={projectCardStyles.more}
            >
              {isExpanded ? "Show Less" : "Show More"}
            </Button>
          )}
        </Box>

        {techStack && techStack.length > 0 && (
          <Box sx={projectCardStyles.tags}>
            {techStack.map((tag: string) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                variant="outlined"
                sx={projectCardStyles.tag}
              />
            ))}
          </Box>
        )}
      </CardContent>

      {(hasGitHub || hasLiveDemo || project.startDate || project.endDate) && (
        <CardActions sx={projectCardStyles.actions}>
          <Box sx={projectCardStyles.actionGroup}>
            {hasLiveDemo && (
              <Button
                component="a"
                variant="contained"
                size="small"
                href={project.liveDemoUrl as string}
                target="_blank"
                rel="noreferrer"
                startIcon={<Launch fontSize="small" />}
                sx={projectCardStyles.actionButton}
              >
                Live Demo
              </Button>
            )}
            {hasGitHub && (
              <Button
                component="a"
                variant="outlined"
                size="small"
                href={project.githubRepositoryUrl as string}
                target="_blank"
                rel="noreferrer"
                startIcon={<GitHub fontSize="small" />}
                sx={projectCardStyles.actionButton}
              >
                Code
              </Button>
            )}
          </Box>

          {(project.startDate || project.endDate) && (
            <Box sx={projectCardStyles.dates}>
              {project.startDate && <span>{new Date(project.startDate).getFullYear()}</span>}
              {project.startDate && project.endDate && <span>-</span>}
              {project.endDate && <span>{project.endDate ? new Date(project.endDate).getFullYear() : "Present"}</span>}
            </Box>
          )}
        </CardActions>
      )}
    </Card>
  );
};