import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3B82F6",
      light: "#60A5FA",
      dark: "#2563EB",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#14B8A6",
      light: "#2DD4BF",
      dark: "#0F766E",
      contrastText: "#04111F",
    },
    background: {
      default: "#090D16",
      paper: "rgba(17, 24, 39, 0.75)",
    },
    text: {
      primary: "#F3F4F6",
      secondary: "#AAB3C2",
    },
    divider: "rgba(255, 255, 255, 0.08)",
  },
  typography: {
    fontFamily: ['"Inter"', '"Roboto"', '"Helvetica"', '"Arial"', "sans-serif"].join(","),
    h1: { fontWeight: 800, letterSpacing: 0 },
    h2: { fontWeight: 800, letterSpacing: 0 },
    h3: { fontWeight: 700, letterSpacing: 0 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#090D16",
          backgroundImage: `
            radial-gradient(circle at 15% 15%, rgba(59, 130, 246, 0.10) 0%, transparent 40%),
            radial-gradient(circle at 85% 55%, rgba(20, 184, 166, 0.10) 0%, transparent 45%),
            radial-gradient(circle at 50% 85%, rgba(245, 158, 11, 0.06) 0%, transparent 50%),
            linear-gradient(180deg, #060911 0%, #0c1220 50%, #070a13 100%)
          `,
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          color: "#F3F4F6",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { width: "8px" },
          "&::-webkit-scrollbar-track": { background: "#090D16" },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(255, 255, 255, 0.15)",
            borderRadius: "4px",
            "&:hover": { background: "rgba(255, 255, 255, 0.25)" },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "rgba(17, 24, 39, 0.75)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 8px 26px rgba(0, 0, 0, 0.3)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "rgba(17, 24, 39, 0.75)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 8px 26px rgba(0, 0, 0, 0.3)",
          transition: "transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out, border-color 0.25s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 36px rgba(59, 130, 246, 0.18)",
            borderColor: "rgba(59, 130, 246, 0.35)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "8px 22px",
          transition: "all 0.2s ease-in-out",
          "&.MuiButton-containedPrimary": {
            background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
            boxShadow: "0 4px 14px rgba(59, 130, 246, 0.35)",
            "&:hover": {
              background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)",
              boxShadow: "0 6px 20px rgba(59, 130, 246, 0.5)",
            },
          },
          "&.MuiButton-outlinedPrimary": {
            borderColor: "rgba(59, 130, 246, 0.4)",
            "&:hover": { borderColor: "#3B82F6", backgroundColor: "rgba(59, 130, 246, 0.08)" },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontWeight: 600,
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
      },
    },
  },
});
