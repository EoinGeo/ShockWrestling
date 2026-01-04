import { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";
import { lightColours, darkColours } from "../themes/colours";

type ThemeContextType = {
  scheme: "light" | "dark";
  colours: typeof lightColours;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useColorScheme();
  const [scheme, setScheme] = useState<"light" | "dark">(
    systemScheme ?? "light"
  );

  const toggleTheme = () => {
    setScheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const colours = scheme === "light" ? darkColours : lightColours;

  return (
    <ThemeContext.Provider value={{ scheme, colours, toggleTheme }}>
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
