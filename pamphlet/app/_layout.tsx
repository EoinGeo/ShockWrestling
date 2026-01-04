import { ThemeProvider } from "../contexts/ThemeContext";
import PageFormat from "./pageFormat";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <PageFormat />
    </ThemeProvider>
  );
}
