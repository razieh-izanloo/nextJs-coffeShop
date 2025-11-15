import Image from "next/image";
import Link from "next/link";

export const BannerGetComapny = () => {
  return (
    <div className="w-full flex justify-center bg-[#6c86fd]">
      <div className="p-4 w-full container-xl">
        <div className="relative h-72">
          <Image
            src="/images/map.png"
            className="object-contain"
            alt="get company"
            fill
          />
          <div>
            <p className="text-[#2a2d53] text-5xl">نماینده شو...</p>
            <p className="text-[#2a2d53] text-2xl mt-3">
              شرایط نمایندگی در شهر شما
            </p>
          </div>
          <Link
            className="absolute bottom-3.5 bg-[#2a2d53] rounded-[5px] py-2 px-4 text-white"
            href="/get-company"
          >
            کلیک کن
          </Link>
          <Link className="absolute bottom-3.5 left-0" href="/">
            <Image
              src="/images/logo-text.png"
              className="h-8"
              alt="alphagard Logo"
              width="117"
              height="45"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
