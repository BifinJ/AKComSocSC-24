import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AKComSocSC-'24",
  description: "All Kerala Comsoc Student Conference 24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
