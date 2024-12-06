import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GlobalProvider from "@/components/providers/GlobalProvider";
import { Ubuntu } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata = {
  title: "Shasthya Setu",
  description:
    "ShasthyaSetu is a healthcare platform designed to tackle Bangladesh’s healthcare challenges, utilizing AI, blockchain, and telemedicine. It provides personalized health plans, enables remote consultations, and incentivizes healthy behaviors through a reward-based token system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${ubuntu.className}`}
      >
        <GlobalProvider>
          <Header />
          {children}
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
