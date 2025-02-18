import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "../styles/globals.css";


const inter = Inter({
  variable: '--font-inter', // CSS variable for easier font management
  subsets: ['latin'], // This is the subset you want (you can add more subsets)
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Computers for Cause",
  description: "Freedom High School, South Riding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <title>Computers for Cause</title>
      </head>

      <body className={`${inter.variable} ${inter.variable} antialiased`}>
        
        <Navbar></Navbar>

        <main>
          {children}
        </main>

      </body>

    </html>
  );
}
