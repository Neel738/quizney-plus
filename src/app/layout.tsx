import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SessionProvider } from "./_context/SessionContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Quizney+`,
  description: `Movies and TV Shows dude`,
};
const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <h1 className="text-xl font-bold">Quizney+</h1>
      <div>
        <a href="/" className="mx-2">
          Home
        </a>
        <a href="/find" className="mx-2">
          Find
        </a>
        <a href="/my-list" className="mx-2">
          My List
        </a>
      </div>
    </nav>
  );
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div className="min-h-screen flex flex-col my-10 max-w-screen">
          <SessionProvider>{children}</SessionProvider>
        </div>
      </body>
    </html>
  );
}
