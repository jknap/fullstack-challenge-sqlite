import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TrpcProvider } from "@/trpc/TrpcProvider";
import ThemeRegistry from "./ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fullstack Challenge",
  description: "Fullstack Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <TrpcProvider>{children}</TrpcProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
