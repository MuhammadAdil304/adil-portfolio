import { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";
import { Section } from "../common/Section";

type ProjectsSectionProps = {
  className?: string;
};

export const ProjectsSection = ({ className }: ProjectsSectionProps) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const totalProjects = projects.length;

  const projectsToShow = projects.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, totalProjects));
  };

  const showViewMore = visibleCount < totalProjects;

  return (
    <Box sx={{ py: { xs: 7, md: 8 }, px: { xs: 2, md: 3 } }} className={className}>
      <Section
        id="projects"
        title="Projects"
        centered
        subtitle="Selected work showcasing full-stack development, clean UI, and real-world problem solving."
        contentMaxWidth={980}
      >

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {projectsToShow.map((project) => (
            <Grid size={{ xs: 12, md: 6 }} key={project._id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>

        {showViewMore && (
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              variant="outlined"
              sx={{
                px: 3,
                py: 1.25,
                fontSize: 14,
                borderRadius: 2,
              }}
              onClick={handleViewMore}
            >
              View More
            </Button>
          </Box>
        )}
      </Section >
    </Box>
  );
};