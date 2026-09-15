import type { SxProps, Theme } from "@mui/material/styles";
export const footerStyles: Record<string, SxProps<Theme>> = {
  root: { borderTop: "1px solid rgba(255,255,255,.08)", py: { xs: 3, sm: 4 } },
  inner: { display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { xs: "center", sm: "center" }, textAlign: { xs: "center", sm: "left" }, gap: { xs: 1, sm: 1.5 }, "& .MuiTypography-root": { lineHeight: 1.6 } },
};
