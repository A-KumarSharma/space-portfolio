import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import StarsCanvas from "@/components/main/starbackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/footer";

const inter = Inter({subsets:['latin']})

export const metadata: Metadata = {
  title: "Ak PORtfOlIO",
  description: "thIS MY PORtfOlIO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden `}
      >
        <StarsCanvas/>
        <Navbar/>
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
