import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WalletProvider } from "@/components/WalletProvider";
import { WalletButton } from "@/components/WalletButton";
import { ToastProvider } from "@/components/ToastProvider";
import { NetworkProvider } from "@/contexts/NetworkContext";
import { NetworkToggle } from "@/components/NetworkToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NetworkProvider>
          <WalletProvider>
            <ToastProvider />
            <header className="p-4 flex justify-between items-center border-b border-cyan-800 bg-black">
              <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                SuperSonic Wallet
              </h1>
              <div className="flex items-center gap-4">
                <NetworkToggle />
                <WalletButton />
              </div>
            </header>
            <main>{children}</main>
          </WalletProvider>
        </NetworkProvider>
      </body>
    </html>
  );
}
