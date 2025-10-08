import { Toaster } from "react-hot-toast";
import Providers from "../../providers";
import "../../globals.css";
import { Header } from "@/components/header";

export const metadata = {
  title: "Profile",
  description: "Profile",
};

export default function ProfileLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Toaster />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
