import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "@/layout/mailLayout";
export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    // Customize your theme here if needed
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Wrap the Component with MainLayout to ensure App Bar is displayed across all pages */}
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
