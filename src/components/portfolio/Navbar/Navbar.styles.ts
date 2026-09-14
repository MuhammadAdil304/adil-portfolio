import type { SxProps, Theme } from "@mui/material/styles";
export const navbarStyles: Record<string, SxProps<Theme>> = {
  root: { borderBottom: "1px solid rgba(255,255,255,.08)", background: "rgba(9,13,22,.82)", backdropFilter: "blur(16px)" },
  toolbar: { minHeight: 72, display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 3 },
  logo: { display: "flex", alignItems: "center", "& a": { color: "text.primary", fontWeight: 800, textDecoration: "none" } },
  links: { display: { xs: "none", md: "flex" }, justifyContent: "center", "& .MuiButton-root": { color: "text.secondary", px: 2, fontWeight: 500, "&:hover": { color: "text.primary" } } },
  actions: { display: "flex", justifyContent: "flex-end", alignItems: "center" },
  github: { display: { xs: "none", md: "flex" }, borderRadius: 1, fontWeight: 600 },
  mobileLabel: { display: { xs: "block", md: "none" }, color: "text.secondary", fontSize: 13 },
};
