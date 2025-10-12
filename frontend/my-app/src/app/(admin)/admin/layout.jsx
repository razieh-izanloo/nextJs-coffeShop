import { Toaster } from "react-hot-toast";
import "../../globals.css";
import Providers from "../../providers";

export const metadata = {
  title: "admin",
  description: "admin",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body
      >
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
