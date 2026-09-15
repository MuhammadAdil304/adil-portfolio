import type { SxProps, Theme } from "@mui/material/styles";
export const heroStyles: Record<string, SxProps<Theme>> = {
  root: { minHeight: "84vh", display: "flex", alignItems: "center", py: { xs: 6, md: 12 } },
  container: { display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" }, alignItems: "center", gap: { xs: 4, md: 8 } },
  overline: { fontWeight: 800, letterSpacing: "0.18em" },
  name: { maxWidth: 760, mt: 1, fontSize: { xs: 44, sm: 62, md: 72 }, lineHeight: 1.02 },
  role: { mt: 2, fontWeight: 700 },
  intro: { mt: 3, maxWidth: 680, fontSize: { xs: 17, md: 19 }, lineHeight: 1.8 },
  actions: { display: "flex", gap: 1.5, flexWrap: "wrap", mt: 4 },
  highlights: { display: "flex", gap: 1.25, flexWrap: "wrap", mt: 4 },
  imageWrap: { position: "relative", width: { xs: "min(270px, 72vw)", sm: "min(320px, 80vw)", md: "min(400px, 100%)" }, aspectRatio: "1", mx: "auto", mt: { xs: 1, md: 0 } },
  image: { width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", border: "2px solid #fff", display: "block", transition: "transform .3s ease" },
};
