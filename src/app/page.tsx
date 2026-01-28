
import { Metadata } from "next";
import Home from '@/components/pages/Home/Home.jsx';



export const metadata: Metadata = {
  title: "Your One-Stop Solution for Professional Home Services",
  description:
    "Discover expert home services including plumbing, roofing, HVAC, electrical work, and more. Fast, reliable, and professional solutions tailored to your home improvement needs.",

  icons: {
    icon: "/favicon.ico", // Use the existing favicon.ico
  },
};


export default function Page() {
  return <Home />;
}