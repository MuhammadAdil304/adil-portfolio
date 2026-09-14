import type { SxProps, Theme } from "@mui/material/styles";
export const footerStyles: Record<string, SxProps<Theme>> = {
  root: { borderTop: "1px solid rgba(255,255,255,.08)", py: 4 },
  inner: { display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "center" }, gap: 1.5 },
};
