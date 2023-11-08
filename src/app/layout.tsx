import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import Navigation from "@/components/navigation/navigation"
import { baseUrl } from "@/lib/baseUrl"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | Joa Leitola",
    default: "Joa Leitola",
  },
  description:
    "Joa Leitola offers consulting and software development services. I build websites and web applications. I'm based in Helsinki, Finland.",
  keywords: [
    "joa leitola",
    "consulting",
    "software",
    "development",
    "websites",
    "web",
    "services",
    "applications",
    "helsinki",
    "finland",
    "reactjs",
    "nextjs",
    "typescript",
    "javascript",
    "nodejs",
    "tailwindcss",
    "tailwind",
    "freelance",
    "contract",
    "web development front end",
    "web development company",
    "responsive web development",
    "web development applications",
    "web development and design",
    "web development services",
    "what is web development",
    "ux research",
    "full stack web development",
    "app development",
    "web devs",
    "verkkokehittäjä",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Joa Leitola - Software Development Services",
    description:
      "Joa Leitola offers consulting and software development services. I build websites and web applications. I'm based in Helsinki, Finland.",
    siteName: "Joa Leitola",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joa Leitola - Software Development Services",
    description:
      "Joa Leitola offers consulting and software development services. I build websites and web applications. I'm based in Helsinki, Finland.",
    images: [`${baseUrl}/og.png`],
    creator: "@joaleitola",
  },
  applicationName: "Joa Leitola - Software Development Services",
  creator: "Joa Leitola",
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
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
