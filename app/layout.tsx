import type { Metadata } from "next";
import "./globals.css";

const url = "https://vedpatel.dev";
const title = "Ved Patel — Azure Data Engineer";
const description =
  "Azure Data Engineer building production data platforms on Microsoft Fabric, ADF, PySpark, and Power BI. Microsoft-certified, Codeforces Specialist, HackOn Top 50 / 28K.";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    "Ved Patel",
    "Azure Data Engineer",
    "Microsoft Fabric",
    "PySpark",
    "Power BI",
    "Azure Data Factory",
    "Data Engineering Portfolio",
  ],
  authors: [{ name: "Ved Patel" }],
  creator: "Ved Patel",
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "Ved Patel",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
