import { Poppins, Inter, Manrope } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";


const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "400", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "400", "600", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${manrope.variable}`}>
       <body className="antialiased font-[var(--font-manrope)] bg-white">
       {children}
       </body>
    </html>
  );
}
