import "../global.css";
import { ThemeProvider } from "./components/theme-provider";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Inter } from "@next/font/google";
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
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
      </head>
      <ThemeProvider>
      <body
        className={`bg-white dark:bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
        <ThemeSwitcher />
      </body>
    </ThemeProvider>
    </html>
  );
}
