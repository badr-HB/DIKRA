import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

const surgena = localFont({
  src: [
    {
      path: '../../public/fonts/SurgenaPersonalUseOnlySembd-q2qwd.woff2',
      style: 'normal',
    }
  ],
  variable : '--font-surgena',
})

const poppins = Poppins({
  variable: "--font-poppins",
  weight : ['100','200','300','400','500','600','700','800','900'],
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dikra",
  description: "web app for sharing videos and photos",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${surgena.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
