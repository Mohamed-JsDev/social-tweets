import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

export const metadata = {
  title: "social tweets",
  description: " social tweets app to connect with people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
