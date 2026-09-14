import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { projects } from "../../../data/projects";
import { Section } from "../../common/Section/Section";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { projectsStyles } from "./ProjectsSection.styles";
type ProjectsSectionProps={className?:string};
export const ProjectsSection=({className}:ProjectsSectionProps)=>{const [visibleCount,setVisibleCount]=useState(4); return <Box className={className} sx={projectsStyles.root}><Section id="projects" title="Projects" centered subtitle="Selected work showcasing full-stack development, clean UI, and real-world problem solving." contentMaxWidth={980}><Grid container spacing={{xs:2,md:3}}>{projects.slice(0,visibleCount).map((project)=><Grid size={{xs:12,md:6}} key={project._id}><ProjectCard project={project}/></Grid>)}</Grid><ProjectsMore visibleCount={visibleCount} onShowMore={()=>setVisibleCount((prev)=>Math.min(prev+2,projects.length))}/></Section></Box>};
const ProjectsMore=({visibleCount,onShowMore}:{visibleCount:number;onShowMore:()=>void})=>visibleCount<projects.length ? <Box sx={projectsStyles.more}><Button sx={projectsStyles.moreButton} variant="outlined" onClick={onShowMore}>View More</Button></Box> : null;
