import type { SxProps, Theme } from "@mui/material/styles";
export const aboutStyles: Record<string, SxProps<Theme>> = {
  content: { p: { xs: 3, md: 4 }, display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" }, gap: { xs: 4, md: 6 } },
  kicker: { display: "flex", gap: 1.25, alignItems: "center", color: "primary.light", "& .MuiTypography-root": { fontWeight: 800, letterSpacing: "0.18em" } },
  heading: { mt: 2, lineHeight: 1.25 },
  copy: { display: "flex", flexDirection: "column", gap: 2.25, color: "text.secondary", "& p": { lineHeight: 1.8 } },
  note: { display: "flex", gap: 1.5, color: "secondary.light", alignItems: "center" },
};
