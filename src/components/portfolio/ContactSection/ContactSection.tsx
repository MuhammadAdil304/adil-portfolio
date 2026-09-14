import { Email } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { contactDetails } from "../../../data/contact";
import { Section } from "../../common/Section/Section";
import { contactStyles } from "./ContactSection.styles";
const email = contactDetails.find((entry)=>entry.label === "Email")?.value ?? "";
export const ContactSection = () => <Section id="contact" title="Contact" centered subtitle="Feel free to reach out — I'm open to freelance projects, collaborations, and full-time opportunities." contentMaxWidth={560}><Box sx={contactStyles.root}><Box sx={contactStyles.email}><Email fontSize="small"/><Link href={`mailto:${email}`} underline="hover" color="inherit">{email}</Link></Box><Typography variant="body2" color="text.secondary" sx={contactStyles.note}>I usually reply within 24 hours.</Typography></Box></Section>;
