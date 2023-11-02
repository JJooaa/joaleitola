import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/Navigation";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://acme.com"),
  title: {
    template: "%s | Joa Leitola",
    default: "Joa Leitola",
  },
  description: "Joa Leitola's personal website.",
  keywords: [
    "consulting",
    "software",
    "development",
    "websites",
    "web",
    "applications",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "fi-FI": "/fi-FI",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-background antialiased p-8", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
