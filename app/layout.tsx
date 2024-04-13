import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://garvv.me/"),
    title: "TRAZHUB",
    description:
    "Student, currently studying at Arena Animation Nodida. Focused on immersive experiences, studying in Ghaziabad, India.",
    generator: "Next.js",
    applicationName: "GARV VERMA",
    keywords: [
        "Garv verma",
        "Ghaziabad",
        "Garv verma Ghaziabad",
        "Garv verma designer",
        "India",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "TRAZHUB - Designer and Developer",
        description:
      "Student, currently studying at Arena Animation Nodida. Focused on immersive experiences, studying in Ghaziabad, India.",
        url: "https://www.Garvv.me/",
        siteName: "www.garvv.me",
        images: [
            {
                url: "./public/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "TRAZHUB - Designer and Developer",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "TRAZHUB - Designer and Developer",
        description:
      "Student, currently studying at Arena Animation Nodida. Focused on immersive experiences, studying in Ghaziabad, India.",
        creator: "Garv",
        creatorId: "0000000000",
        images: ["./public/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
