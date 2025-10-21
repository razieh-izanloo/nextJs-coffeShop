import { BannerHome } from "@/components/bannerHome";
import { Features } from "@/components/features";
import { LatestProducts } from "@/components/latestProducts";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 grid gap-10 justify-center">
      <BannerHome />
      <Features />
      <LatestProducts/>
    </div>
  );
}
