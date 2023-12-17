import Footer from "./components/Footer";
import "./globals.css";
import NavbarComp from "../app/components/NavbarComp"
import ScrollToTop from "../app/components/ScrollToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">
      <body className="m-0 p-0 box-border relative" >
        <NavbarComp />
        {children}
        <Footer />
        <ScrollToTop/>
      </body>
    </html>
  );
}