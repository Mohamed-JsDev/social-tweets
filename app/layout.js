import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

const data = "social tweets";

export const metadata = {
  title: data,
  description: "next app social media",
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
