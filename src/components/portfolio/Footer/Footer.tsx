import { Box, Container, Link, Typography } from "@mui/material";
import { footerStyles } from "./Footer.styles";
export const Footer = () => <Box component="footer" sx={footerStyles.root}><Container maxWidth="lg"><Box sx={footerStyles.inner}><Typography variant="body2" color="text.secondary">{new Date().getFullYear()} Muhammad Adil. All rights reserved.</Typography><Typography variant="body2" color="text.secondary">Designed & Developed by Muhammad Adil</Typography></Box></Container></Box>;
