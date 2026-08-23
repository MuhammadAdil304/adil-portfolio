import { useState, useRef, useLayoutEffect } from "react";
import { Chip, Box, Typography, Button, Card, CardContent, CardMedia, CardActions } from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { motion } from "framer-motion";
import type { Project } from "../../data/projects";

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
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 30px rgba(0, 0, 0, 0.4)",
          borderColor: "primary.main",
        },
      }}
    >
      {project.projectImage ? (
        <CardMedia
          component="img"
          height="300"
          image={project.projectImage}
          alt={project.projectName || "Project"}
          sx={{ objectFit: "cover" }}
        />
      ) : (
        <Box
          sx={{
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "rgba(255, 255, 255, 0.02)",
            borderBottom: "1px solid",
            borderColor: "divider",
            color: "text.disabled",
            fontStyle: "italic",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.5 }}>
            {project.projectName || "No project image available"}
          </Typography>
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, lineHeight: 1.3, color: "text.primary" }}>
          {project.projectName}
        </Typography>

        {project.subtitle && (
          <Typography
            variant="subtitle2"
            color="primary.light"
            sx={{ mb: 2, fontWeight: 500 }}
          >
            {project.subtitle}
          </Typography>
        )}

        <Box sx={{ mb: 1 }}>
          {project.description && (
            <Typography
              ref={textRef}
              variant="body2"
              sx={{
                ...(!isExpanded && {
                  display: "-webkit-box",
                  WebkitLineClamp: MAX_LINES,
                  WebkitBoxOrient: "vertical",
                  maxHeight: `calc(1.6em * ${MAX_LINES})`,
                  overflow: "hidden",
                }),
                color: "text.secondary",
                mb: 1,
                lineHeight: 1.6,
              }}
            >
              {project.description}
            </Typography>
          )}
          {project.description && (isTruncated || isExpanded) && (
            <Button
              variant="text"
              size="small"
              onClick={toggleExpand}
              sx={{ p: 0, minWidth: "auto", textTransform: "none", fontWeight: 600, color: "primary.main" }}
            >
              {isExpanded ? "Show Less" : "Show More"}
            </Button>
          )}
        </Box>

        {techStack && techStack.length > 0 && (
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 3 }}>
            {techStack.map((tag: string) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                variant="outlined"
                sx={{
                  color: "text.secondary",
                  borderColor: "rgba(255, 255, 255, 0.15)",
                  bgcolor: "rgba(255, 255, 255, 0.03)",
                  fontWeight: 500,
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.08)",
                  }
                }}
              />
            ))}
          </Box>
        )}
      </CardContent>

      {(hasGitHub || hasLiveDemo || project.startDate || project.endDate) && (
        <CardActions sx={{ p: 3, pt: 0, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 2 }}>
          <Box sx={{ display: "flex", gap: 1.5 }}>
            {hasLiveDemo && (
              <Button
                component="a"
                variant="contained"
                size="small"
                href={project.liveDemoUrl as string}
                target="_blank"
                rel="noreferrer"
                startIcon={<Launch fontSize="small" />}
                sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600, px: 2 }}
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
                sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600, px: 2 }}
              >
                Code
              </Button>
            )}
          </Box>

          {(project.startDate || project.endDate) && (
            <Box sx={{ display: "flex", gap: 0.5, color: "text.disabled", fontSize: "0.85rem", fontWeight: 500 }}>
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