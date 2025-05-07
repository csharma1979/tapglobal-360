"use client";


import dynamic from 'next/dynamic';
import { Inter } from "next/font/google";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import "../../styles/style.scss";
import "./global.css"

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.includes("admin");
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Tap Global</title>
        <meta
          name="description"
          content="Your trusted partner for home solutions"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          {!isAdminRoute && <Header />}
          {children}
          {!isAdminRoute && <Footer />}
        </Suspense>
        {/* <Header />
        {children}
        <Footer /> */}
      </body>
    </html>
  );
}
