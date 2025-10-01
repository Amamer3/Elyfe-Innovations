import "../global.css";
import { ThemeProvider } from "./components/theme-provider";
import { Navigation } from "./components/nav";
import { Inter, JetBrains_Mono, Space_Grotesk } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Elyfe Innovations",
    template: "%s | elyfe.net",
  },
  description: "Elyfe Innovations | Empowering Tomorrow's Distributed Ecosystems",
  openGraph: {
    title: "Elyfe Innovations",
    description:
      "Elyfe Innovations | Empowering Tomorrow's Distributed Ecosystems",
    url: "https://elyfe.net",
    siteName: "elyfe.net",
    images: [
      {
        url: "https://elyfe.net/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Elyfe Innovations",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, spaceGrotesk.variable, jetbrainsMono.variable, calSans.variable, "scroll-smooth"].join(" ")}>
      <head>
      </head>
      <ThemeProvider>
      <body
        className={`bg-white dark:bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <Navigation />
        {children}
      </body>
    </ThemeProvider>
    </html>
  );
}
