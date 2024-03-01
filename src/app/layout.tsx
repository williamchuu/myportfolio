import type { Metadata } from "next";
import { Rubik, Heebo } from "next/font/google";
import "./globals.css";
const heebo = Heebo({
  subsets: ['latin'], variable: '--font-heebo'
})
const rubik = Rubik({ subsets: ["latin"], variable: '--font-rubik' });

export const metadata: Metadata = {
  title: "William Chu Portfolio - Graphic and UI/UX Designer",
  description: "UI/UX and Graphic designer with a passion in layout and design. Improving user experience through communication by design. Developed by Philip Ho.",
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
  keywords:["UI/UX Design", "Graphic Design", "Portfolio", "Design", "Layouts", "Minimalism", "Simplicity"],
  openGraph: {
    images: "/faviconDark.svg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${rubik.className} ${heebo.variable} bg-bg`}>{children}</body>
    </html>
  );
}
