import Footer from "./components/Footer"
import Nav from "./components/Nav"
import "./globals.css"
import { IoLogoWhatsapp } from "react-icons/io";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Nav/>
        <div className="max-w-[1000px] mx-auto p-4">
          {children}
        </div>
        <IoLogoWhatsapp  className="text-[56px] text-black fixed right-2 bottom-4" color="green"  />
        <Footer/>
      </body>
    </html>
  )
}
