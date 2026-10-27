import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Практическая 1.3",
  description: "Server and Client Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}