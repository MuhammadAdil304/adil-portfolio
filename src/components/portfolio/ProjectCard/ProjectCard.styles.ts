import type { SxProps, Theme } from "@mui/material/styles";
export const projectCardStyles: Record<string, SxProps<Theme>> = {
  card: { height: "100%", display: "flex", flexDirection: "column", bgcolor: "background.paper", border: "1px solid", borderColor: "divider", borderRadius: 3, overflow: "hidden", transition: "transform .3s ease, box-shadow .3s ease, border-color .3s ease", "&:hover": { transform: "translateY(-6px)", boxShadow: "0 12px 30px rgba(0,0,0,.4)", borderColor: "primary.main" } },
  media: { objectFit: "cover" },
  noMedia: { height: 200, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "rgba(255,255,255,.02)", borderBottom: "1px solid", borderColor: "divider", color: "text.disabled", fontStyle: "italic" },
  noMediaText: { opacity: 0.5 },
  content: { flexGrow: 1, p: 3 },
  descriptionWrapper: { mb: 1 },
  title: { fontWeight: 700, mb: 0.5, lineHeight: 1.3, color: "text.primary" },
  subtitle: { mb: 2, fontWeight: 500 },
  description: { color: "text.secondary", mb: 1, lineHeight: 1.6 },
  more: { p: 0, minWidth: "auto", textTransform: "none", fontWeight: 600, color: "primary.main" },
  tags: { display: "flex", gap: 1, flexWrap: "wrap", mt: 3 },
  tag: { color: "text.secondary", borderColor: "rgba(255,255,255,.15)", bgcolor: "rgba(255,255,255,.03)", fontWeight: 500, "& .MuiChip-icon": { ml: 0.75, mr: -0.25 }, "&:hover": { bgcolor: "rgba(255,255,255,.08)" } },
  actions: { p: 3, pt: 0, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 2 },
  actionGroup: { display: "flex", gap: 1.5 },
  actionButton: { borderRadius: 2, textTransform: "none", fontWeight: 600, px: 2 },
  dates: { display: "flex", gap: 0.5, color: "text.disabled", fontSize: "0.85rem", fontWeight: 500 },
};
export function descriptionStyle(expanded: boolean): SxProps<Theme> {
  return expanded ? projectCardStyles.description : { ...projectCardStyles.description, display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", maxHeight: "calc(1.6em * 4)", overflow: "hidden" };
}
