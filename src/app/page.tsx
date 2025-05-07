
import { Metadata } from "next";
import Home from '@/components/pages/Home/Home.jsx';



export const metadata: Metadata = {
  title: "Your One-Stop Solution for Professional Home Services",
  description:
    "Discover expert home services including plumbing, roofing, HVAC, electrical work, and more. Fast, reliable, and professional solutions tailored to your home improvement needs.",

    icons: {
      icon: [
        { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
  };


export default function Page() {
  return <Home />;
}