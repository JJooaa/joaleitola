import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import Navigation from "@/components/navigation/navigation"
import { baseUrl } from "@/lib/baseUrl"
import { GeistSans } from "geist/font"
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
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
  applicationName: "Joa Leitola Website",
  creator: "Joa Leitola",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("bg-background p-4 antialiased md:p-8", inter.className)}
      >
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
  )
}
