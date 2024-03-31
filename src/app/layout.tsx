import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SessionProvider } from "./_context/SessionContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Quizney+`,
  description: `Movies and TV Shows dude`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col my-10 max-w-screen">
          <SessionProvider>{children}</SessionProvider>
        </div>
      </body>
    </html>
  );
}
