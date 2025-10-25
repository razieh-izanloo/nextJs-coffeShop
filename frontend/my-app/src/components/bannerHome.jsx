import Image from "next/image";

export const BannerHome = () => {
  return (
    <div className="grid sm:grid-cols-2 relative justify-between items-center py-4 gap-3 sm:gap-0 container-xl">
      <div className="col-span-1 flex justify-center sm:order-2">
        <Image
          src="/images/banner.png"
          width="400"
          height="400"
          alt="banner home page"
          className="mask-image"
        />
      </div>
      <Image
        src="/images/bg-bannerHome.svg"
        className="-z-10"
        fill
        alt="banner"
        priority
        quality={80}
      />
      <div className="col-span-1 text-center sm:text-right">
        <h1 className="md:text-[55px] text-secondary-900 sm:font-black">
          امنیت محل کار و خانه خود را به ما بسپارید
        </h1>
        <h2 className=" text-gray-400 font-medium text-xs md:text-lg mb-6 sm:mb-2">
          دوربین‌های تشخیص چهره با دقت بالا برای افزایش امنیت، مجهز به فناوری
          روز و قابلیت نظارت هوشمن
        </h2>
      </div>
    </div>
  );
};
