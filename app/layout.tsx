import "./globals.scss";
import type { Metadata } from "next";
import { ReduxProvider } from "@/redux/provider";

export const metadata: Metadata = {
  title: "დომენები",
  description: "მოიძიე შენთვის სასურველი დომენი, გაყიდე ან შეიძინე მარტივად.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
