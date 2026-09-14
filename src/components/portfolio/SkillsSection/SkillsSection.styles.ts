import type { SxProps, Theme } from "@mui/material/styles";
export const skillsStyles: Record<string, SxProps<Theme>> = {
  grid: { display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "stretch", gap: { xs: 2.5, md: 3 } },
  content: { p: { xs: 2.75, md: 3.25 }, height: "100%", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 },
  header: { display: "flex", gap: 1.75, alignItems: "center" },
  categoryTitle: { fontSize: { xs: 17, md: 18.5 }, lineHeight: 1.25 },
  icon: { width: 50, height: 50, borderRadius: 2.5, display: "grid", placeItems: "center", flexShrink: 0 },
  count: { display: "inline-block", mt: 0.5, px: 1, py: 0.25, borderRadius: 999, fontWeight: 700, letterSpacing: "0.08em" },
  description: { mt: 2.25, lineHeight: 1.75, minHeight: { md: 48 } },
  tags: { display: "flex", gap: 1.15, flexWrap: "wrap", mt: "auto", pt: 3 },
  chip: { fontWeight: 600, fontSize: 13, height: 34, px: 0.5, bgcolor: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.09)", transition: "all .22s ease", "& .MuiChip-icon": { ml: 0.9, mr: 0.25 } },
};
export function categoryCardStyle(accent: string, accentLight: string, glow: string): SxProps<Theme> {
  return { width: { xs: "100%", sm: 340, md: 460 }, maxWidth: "100%", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", transition: "transform .28s ease, box-shadow .28s ease, border-color .28s ease", "&::before": { content: '""', position: "absolute", inset: "0 0 auto 0", height: 3, background: `linear-gradient(90deg,${accent},${accentLight})` }, "&::after": { content: '""', position: "absolute", top: -48, right: -48, width: 140, height: 140, borderRadius: "50%", background: `radial-gradient(circle,${glow} 0%,transparent 72%)`, pointerEvents: "none" }, "&:hover": { transform: "translateY(-6px)", boxShadow: `0 16px 40px ${glow}`, borderColor: `${accent}55` } };
}
export function categoryIconStyle(accent: string, accentLight: string, glow: string): SxProps<Theme> { return { ...skillsStyles.icon, background: `linear-gradient(145deg,${accent}28,${accentLight}12)`, border: `1px solid ${accent}44`, color: accentLight, boxShadow: `0 10px 28px ${glow}` }; }
export function categoryCountStyle(accent: string, accentLight: string): SxProps<Theme> { return { ...skillsStyles.count, color: accentLight, bgcolor: `${accent}18`, border: `1px solid ${accent}33` }; }
export function skillChipStyle(chipHover: string, accent: string, accentLight: string, glow: string): SxProps<Theme> { return { ...skillsStyles.chip, "&:hover": { bgcolor: chipHover, borderColor: `${accent}66`, color: accentLight, transform: "translateY(-2px)", boxShadow: `0 6px 16px ${glow}` } }; }
