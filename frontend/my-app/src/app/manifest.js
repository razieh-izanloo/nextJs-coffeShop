export default function manifest() {
  return {
    name: "Alpha Guard",
    short_name: "AlphaGuard",
    description: "A website for selling CCTv",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/images/logo-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
