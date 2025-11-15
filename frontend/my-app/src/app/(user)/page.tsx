import { BannerHome } from "@/components/bannerHome";
import { Features } from "@/components/features";
import { LatestProducts } from "@/components/latestProducts";
import { BannerGetComapny } from "@/components/bannerGetCompany";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="p-8 pb-20">
        <BannerHome />
        <Features />
        <LatestProducts />
      </div>
      <BannerGetComapny />
    </div>
  );
}
