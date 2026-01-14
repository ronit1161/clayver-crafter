import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "./providers";
import { CustomCursor } from "@/components/ui/CustomCursor";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata = {
  title: "ClayverCrafter | Handmade Clay Art",
  description: "Minimalist earthy clay art showcase.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} antialiased font-sans bg-background text-foreground flex flex-col min-h-screen`}
      >
        <Providers>
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
