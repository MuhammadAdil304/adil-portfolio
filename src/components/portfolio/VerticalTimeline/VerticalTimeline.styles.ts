import type { SxProps, Theme } from "@mui/material/styles";
export const timelineStyles: Record<string, SxProps<Theme>> = {
  root: { position: "relative" },
  line: { position: "absolute", left: { xs: 14, md: 22 }, top: 1, bottom: 1, width: 2, transform: "translateX(-50%)", borderRadius: 8, background: "linear-gradient(180deg,#60A5FA,#14B8A6,rgba(245,158,11,.7))", zIndex: 0 },
  list: { display: "flex", flexDirection: "column", gap: 3 },
  item: { position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: { xs: "28px 1fr", md: "44px 1fr" }, gap: { xs: 2, md: 3 } },
  markerWrap: { display: "flex", justifyContent: "center", pt: 3 },
  marker: { width: 14, height: 14, borderRadius: "50%", bgcolor: "background.default", border: "3px solid", boxShadow: "0 0 0 6px rgba(59,130,246,.12)", flexShrink: 0 },
  cardContent: { p: { xs: 2.5, md: 3 } },
  header: { display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", gap: 2 },
  identity: { display: "flex", gap: { xs: 1.5, md: 2 }, alignItems: "flex-start" },
  logo: { width: { xs: 58, md: 70 }, height: { xs: 58, md: 70 }, objectFit: "contain", flexShrink: 0, p: 1, borderRadius: 2.5, bgcolor: "rgba(255,255,255,.96)", border: "1px solid rgba(255,255,255,.14)", boxShadow: "0 8px 22px rgba(0,0,0,.22)" },
  date: { display: "flex", gap: 1, alignItems: "center", color: "primary.light" },
  heading: { mt: 1, fontSize: { xs: 21, md: 26 }, lineHeight: 1.2 },
  subheading: { mt: 0.75, fontWeight: 700 },
  location: { alignSelf: { xs: "flex-start", sm: "center" } },
  description: { mt: 2, lineHeight: 1.8 },
  tags: { display: "flex", gap: 1, flexWrap: "wrap", mt: 2.5, "& .MuiChip-icon": { ml: 0.75, mr: -0.25 } },
  links: { display: "flex", gap: 1.5, flexWrap: "wrap", mt: 3 },
};
export function markerStyle(experience: boolean): SxProps<Theme> { return { ...timelineStyles.marker, borderColor: experience ? "primary.light" : "secondary.light" }; }
