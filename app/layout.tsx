import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import { showInfo } from "./data/show";

export const metadata: Metadata = {
  title: showInfo.fullTitle,
  description: `Track episodes, characters, and story arcs of ${showInfo.fullTitle} on ${showInfo.network}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <Navigation />
        <main className="md:ml-56 pb-20 md:pb-0">
          {children}
        </main>
      </body>
    </html>
  );
}
