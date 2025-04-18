import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const mont = Montserrat({
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={mont.className} >
        {children}
      </body>
    </html>
  );
}
