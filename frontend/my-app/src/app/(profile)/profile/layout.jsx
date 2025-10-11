import { Toaster } from "react-hot-toast";
import Providers from "../../providers";
import "../../globals.css";
import { SideBar } from "./sideBar";

export const metadata = {
  title: "Profile",
  description: "Profile",
};

export default function ProfileLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body
      >
        <Providers>
          <Toaster />
          <div className="grid grid-cols-5 bg-white h-screen">
            <div className="col-span-1 bg-gray-100 overflow-y-auto p-4">
              <SideBar />
            </div>
            <div className="col-span-4 overflow-y-auto p-4">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
