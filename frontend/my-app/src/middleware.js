import axios from "axios";
import http from "./services/httpServices";
import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/profile")) {
    let strCookie = "";
    req.cookies.getAll().forEach((item) => {
      strCookie += `${item.name}=${item.value}; `;
    });

    const { data } = fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: strCookie,
      },
    }).then((res) => res.jsone());

    const { user } = data || {};
    if (!user) {
      NextResponse.redirect(new URL("/auth", url));
    }
  }

  if (pathname.startsWith("/admin")) {
    console.log("pages admin");
  }
}

export const config = {
  matcher: ["/admin", "/profile"],
};
