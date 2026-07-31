import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "UPLIFTT | WEBSITE",
  icons: {
    icon: "/images/uplifttFavicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scrollbar-hidden">
      <body
        className="font-sans min-h-screen flex flex-col scrollbar-hidden"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
