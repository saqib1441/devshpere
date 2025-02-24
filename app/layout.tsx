import type { Metadata } from "next";
import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: "900",
});

export const metadata: Metadata = {
  title: "DevSphere - An IT Software Company",
  description:
    "At Dev Sphere, we provide top-notch IT services, including web development, app development, digital marketing, SEO, WordPress, UI/UX design, and graphic design. Our expert team is dedicated to delivering innovative and customized solutions that help businesses thrive in the digital world. Partner with us for cutting-edge technology and exceptional results!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${poppins.className} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
