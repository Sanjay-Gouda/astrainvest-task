"use client";

import { useTheme } from "@/store/themeContextProvider";
import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

export const MyThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
