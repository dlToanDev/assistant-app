
import Navbar from "../components/Navbar";
import { ReactNode } from "react";

export const metadata = {
  title: "HATHU",
  description: "Trợ lý ảo thông minh kết hợp AI + Blockchain",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body className="flex flex-col min-h-screen">
      
        {/* Nội dung chính */}
        <main className="flex-grow">{children}</main>


      </body>
    </html>
  );
}
