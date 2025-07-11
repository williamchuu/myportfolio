import type { Metadata, Viewport } from "next";
import { Rubik, Heebo } from "next/font/google";
import "./globals.css";
const heebo = Heebo({
  subsets: ['latin'], variable: '--font-heebo'
})
const rubik = Rubik({ subsets: ["latin"], variable: '--font-rubik' });

export const metadata: Metadata = {
  title: "William Chu Portfolio - Graphic and UI/UX Designer",
  description: "UI/UX and Graphic designer with a passion in layout and design. Improving user experience through communication by design.",
  icons: {
    icon: [
      {
        url: '/favicon_dark.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon_light.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
  keywords: ["UI/UX Design", "Graphic Design", "Portfolio", "Design", "Layouts", "Minimalism", "Simplicity"],
  openGraph: {
    images: "/favicon_dark.png",
    locale: "en_US",
    type: "website"
  },
  creator: "William Chu",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export const viewport: Viewport = {
  themeColor: 'black',
  colorScheme: 'dark',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-none scroll-auto ">
      <body className={` ${rubik.className} ${heebo.variable} scroll-smooth`}>{children}</body>
    </html>
  );
}
