"use client";

import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ui/theme-provider";
import * as React from "react";
import { Moon, Sun } from "lucide-react";

export default function Page() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    document.documentElement.classList.toggle("dark", newTheme);
    setIsDarkMode(newTheme);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {typeof window !== "undefined" && (
        <html lang="en" style={{ colorScheme: isDarkMode ? "dark" : "light" }}>
          <div className="dark:bg-black dark:text-white">
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </html>
      )}
    </ThemeProvider>
  );
}

