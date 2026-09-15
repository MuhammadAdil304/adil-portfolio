import { useState } from "react";
import { AppBar, Box, Button, Container, Drawer, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { Close, GitHub, LinkedIn, Menu } from "@mui/icons-material";
import { motion } from "framer-motion";
import { navigationLinks } from "../../../data/navigation";
import { navbarStyles } from "./Navbar.styles";
export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <AppBar component={motion.header} position="sticky" color="transparent" elevation={0} initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }} sx={navbarStyles.root}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={navbarStyles.toolbar}>
          <Box sx={navbarStyles.logo}><Typography component="a" href="#top" variant="h6">Adil.dev</Typography></Box>
          <Stack component="nav" direction="row" spacing={1} sx={navbarStyles.links}>
            {navigationLinks.map((link) => <Button key={link.href} href={link.href} color="inherit" size="small">{link.label}</Button>)}
          </Stack>
          <Box sx={navbarStyles.actions}>
            <Box sx={navbarStyles.desktopActions}>
              <Button href="https://github.com/adil" target="_blank" rel="noreferrer" variant="outlined" size="small" startIcon={<GitHub fontSize="small" />} sx={navbarStyles.github}>GitHub</Button>
              <Button href="https://www.linkedin.com/in/muhammad-adil-031158367/" target="_blank" rel="noreferrer" variant="outlined" size="small" startIcon={<LinkedIn fontSize="small" />} sx={navbarStyles.linkedin}>LinkedIn</Button>
            </Box>
            <IconButton aria-label="Open navigation menu" onClick={() => setIsDrawerOpen(true)} sx={navbarStyles.menuButton}><Menu /></IconButton>
          </Box>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer} slotProps={{ paper: { sx: navbarStyles.drawer } }}>
        <Box sx={navbarStyles.drawerHeader}>
          <Typography variant="h6">Menu</Typography>
          <IconButton aria-label="Close navigation menu" onClick={closeDrawer}><Close /></IconButton>
        </Box>
        <Stack component="nav" sx={navbarStyles.drawerLinks}>
          {navigationLinks.map((link) => <Button key={link.href} href={link.href} onClick={closeDrawer}>{link.label}</Button>)}
          <Button href="https://github.com/adil" target="_blank" rel="noreferrer" startIcon={<GitHub />} onClick={closeDrawer}>GitHub</Button>
          <Button href="https://www.linkedin.com/in/muhammad-adil-031158367/" target="_blank" rel="noreferrer" startIcon={<LinkedIn />} onClick={closeDrawer}>LinkedIn</Button>
        </Stack>
      </Drawer>
    </AppBar>
  );
};
