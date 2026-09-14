import { Code, RocketLaunch, WorkspacePremium } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { aboutParagraphs } from "../../../data/about";
import { Section } from "../../common/Section/Section";
import { aboutStyles } from "./About.styles";
export const About = () => <Section id="about" title="About"><Card component={motion.article} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:.45,ease:"easeOut"}}><CardContent sx={aboutStyles.content}><Box><Box sx={aboutStyles.kicker}><Code fontSize="small"/><Typography variant="overline">Crafted in code</Typography></Box><Typography variant="h4" sx={aboutStyles.heading}>A focused developer summary that stays static and lightweight.</Typography></Box><Box sx={aboutStyles.copy}>{aboutParagraphs.map((paragraph)=><Typography key={paragraph} variant="body1">{paragraph}</Typography>)}<Box sx={aboutStyles.note}><RocketLaunch fontSize="small"/><WorkspacePremium fontSize="small"/><Typography variant="body2" color="text.secondary">Practical frontend delivery, clean API integration, and reliable handoff.</Typography></Box></Box></CardContent></Card></Section>;
