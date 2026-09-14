import type { SxProps, Theme } from "@mui/material/styles";
export const contactStyles: Record<string, SxProps<Theme>> = {
  root: { textAlign: "center" },
  email: { display: "inline-flex", alignItems: "center", gap: 1.25, p: 0.5, color: "primary.light", "& a": { fontSize: { xs: 17, md: 19 }, fontWeight: 700, overflowWrap: "anywhere" } },
  note: { mt: 1.5 },
};
