import { AppBar, Box, Button, Container, Stack, Toolbar, Typography, IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";
import { navigationLinks } from "../../data/navigation";

export const Navbar = () => (
  <AppBar
    component={motion.header}
    position="sticky"
    color="transparent"
    elevation={0}
    initial={{ opacity: 0, y: -16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35 }}
    sx={{
      borderBottom: "1px solid",
      borderColor: "divider",
      bgcolor: "rgba(9, 13, 22, 0.82)",
      backdropFilter: "blur(16px)",
    }}
  >
    <Container maxWidth="lg">
      <Toolbar disableGutters sx={{ minHeight: 72, display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 3 }}>
        
        {/* Left side: Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography component="a" href="#top" variant="h6" sx={{ color: "text.primary", fontWeight: 800, textDecoration: "none" }}>
            Adil.dev
          </Typography>
        </Box>

        {/* Center: Navigation */}
        <Stack component="nav" direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
          {navigationLinks.map((link) => (
            <Button key={link.href} href={link.href} color="inherit" size="small" sx={{ color: "text.secondary", px: 2, fontWeight: 500, "&:hover": { color: "text.primary" } }}>
              {link.label}
            </Button>
          ))}
        </Stack>

        {/* Right side: GitHub / Mobile Text */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <Button
            href="https://github.com/adil"
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            size="small"
            startIcon={<GitHub fontSize="small" />}
            sx={{ display: { xs: "none", md: "flex" }, borderRadius: 2, textTransform: "none", fontWeight: 600 }}
          >
            GitHub
          </Button>
          <Box sx={{ display: { xs: "block", md: "none" }, color: "text.secondary", fontSize: 13 }}>
            Portfolio
          </Box>
        </Box>

      </Toolbar>
    </Container>
  </AppBar>
);
