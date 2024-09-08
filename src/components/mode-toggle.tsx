"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure the theme is applied correctly when the component mounts
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the current theme (either user-selected or system default)
  const currentTheme = theme === "system" ? systemTheme : theme;

  // Toggle between light and dark mode
  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  // Render nothing if not yet mounted (prevents mismatch between server and client rendering)
  if (!mounted) return null;

  return (
    <Button onClick={toggleTheme} variant="outline" size="icon">
      {currentTheme === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
