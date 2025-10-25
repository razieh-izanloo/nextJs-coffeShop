import Image from "next/image";
import Link from "next/link";

export const Features = () => {
  const items = [
    { title: "آموزش رایگان", icon: "pc", url: "/amoozesh" },
    { title: "نحوه خرید", icon: "group-pepole", url: "/namayanedegan" },

    { title: "نرم افرارها", icon: "apps", url: "/apps" },
    { title: "گارانتی", icon: "warranty", url: "/warranty" },
    { title: "اخذ نمایندگی", icon: "pc-system", url: "/get-company" },
  ];

  return (
    <div className="flex justify-start sm:justify-between items-center flex-wrap container-xl gap-3 w-full container-xl">
      {items.map((item) => (
        <Link key={item.title} href={item.url} className="text-center">
          <div className="bg-[#6c86fd] flex justify-center w-20 h-20 rounded-4xl mb-2 hover:bg-[#90acd2]">
            <Image
              src={`/images/icons/${item.icon}.svg`}
              alt={item.title}
              width="40"
              height="40"
              loading="lazy"
            />
          </div>
          <h3 className="font-bold">{item.title}</h3>
        </Link>
      ))}
    </div>
  );
};
