import { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";
import { lightColours, darkColours } from "../themes/colours";

type ThemeContextType = {
  scheme: "light" | "dark";
  colours: typeof lightColours;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);
export type ColorScheme = "light" | "dark";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useColorScheme();
  const [scheme, setScheme] = useState<ColorScheme>("dark");

  const colours = scheme === "light" ? lightColours : darkColours;

  return (
    <ThemeContext.Provider value={{ colours, scheme, setScheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
