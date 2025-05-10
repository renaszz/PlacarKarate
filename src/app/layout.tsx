import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased font-bebas`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
