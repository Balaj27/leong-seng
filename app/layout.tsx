import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { SiteLoader } from "../components/site-loader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Leong Seng Auto Co. Sdn. Bhd.",
    template: "%s | Leong Seng Auto",
  },
  description:
    "Automotive and industrial spare parts supplier in Kuala Lumpur, Malaysia.",
  icons: { icon: "/leong-seng-logo.png", apple: "/leong-seng-logo.png" },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#075fae",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        <SiteLoader />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
