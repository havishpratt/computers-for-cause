import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import { Inter } from "next/font/google";
import "../styles/globals.css";


const inter = Inter({
  variable: '--font-inter', // CSS variable for easier font management
  subsets: ['latin'], // This is the subset you want (you can add more subsets)
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
