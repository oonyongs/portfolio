import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "장윤영 | 기획자 포트폴리오",
  description: "서비스 기획자 장윤영의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
