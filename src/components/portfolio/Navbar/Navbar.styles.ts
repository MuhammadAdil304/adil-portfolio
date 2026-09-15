import type { SxProps, Theme } from "@mui/material/styles";
export const navbarStyles: Record<string, SxProps<Theme>> = {
  root: { borderBottom: "1px solid rgba(255,255,255,.08)", background: "rgba(9,13,22,.82)", backdropFilter: "blur(16px)" },
  toolbar: { minHeight: 72, display: "grid", gridTemplateColumns: { xs: "1fr auto", md: "1fr auto 1fr" }, gap: 3 },
  logo: { display: "flex", alignItems: "center", "& a": { color: "text.primary", fontWeight: 800, textDecoration: "none" } },
  links: { display: { xs: "none", md: "flex" }, justifyContent: "center", "& .MuiButton-root": { color: "text.secondary", px: 2, fontWeight: 500, "&:hover": { color: "text.primary" } } },
  actions: { display: "flex", justifyContent: "flex-end", alignItems: "center" },
  desktopActions: { display: { xs: "none", md: "flex" }, gap: 1 },
  github: { borderRadius: 1, fontWeight: 600 },
  linkedin: { borderRadius: 1, fontWeight: 600, borderColor: "rgba(45, 212, 191, .4)", "&:hover": { borderColor: "secondary.light", backgroundColor: "rgba(20, 184, 166, .08)" } },
  menuButton: { display: { xs: "inline-flex", md: "none" }, color: "text.primary", border: "1px solid", borderColor: "divider", borderRadius: 1 },
  drawer: { width: { xs: "min(82vw, 340px)", sm: 340 }, p: 3, background: "linear-gradient(160deg, #111827, #090D16)" },
  drawerHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", pb: 2, borderBottom: "1px solid", borderColor: "divider" },
  drawerLinks: { gap: 1, pt: 3, "& .MuiButton-root": { justifyContent: "flex-start", color: "text.secondary", fontSize: 16, py: 1.25, px: 1.5, "&:hover": { color: "text.primary", backgroundColor: "rgba(59,130,246,.1)" } } },
};
