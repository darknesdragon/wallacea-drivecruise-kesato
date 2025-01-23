import type { Metadata } from "next";
import { Questrial, Epilogue, Manrope } from "next/font/google";
// import "./globals.css";
import "@styles/layout.scss"

// ----------------------------------------------
// COMPONENT MANAGEMENT -- START
// ----------------------------------------------

// ----------------------------------------------
// COMPONENT MANAGEMENT -- END
// ----------------------------------------------


// ----------------------------------------------
// FONT MANAGEMENT -- START
// ----------------------------------------------

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const questrialFont = Questrial({
    variable: "--font-questrial",
    weight: "400",
    subsets: ["latin"],
});

const epilogueFont = Epilogue({
    variable: "--font-epilogue",
    subsets: ["latin"],
});

const manropeFont = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
});

// ----------------------------------------------
// FONT MANAGEMENT -- END
// ----------------------------------------------

export const metadata: Metadata = {
    title: "Premier Diving Liveaboards | Wallacea Divecruise",
    description: "Your First Choice of Indonesian Liveaboard Operator",
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${questrialFont.variable} ${epilogueFont.variable} ${manropeFont.variable}`}>
                {children}
            </body>
        </html>
    );
}
