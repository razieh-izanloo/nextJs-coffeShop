import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const itemsFooter = [
    {
      title: "آلفاگارد",
      items: [
        {
          titleLink: "مشتریان برتر",
          url: "/",
        },
        { titleLink: "کارخانه", url: "/" },
        { titleLink: "جشنواره", url: "/" },
      ],
    },
    {
      title: "اکسپلور",
      items: [
        {
          titleLink: "مقالات",
          url: "/",
        },
        {
          titleLink: "دستاوردها",
          url: "/",
        },
        {
          titleLink: "قوانین",
          url: "/",
        },
      ],
    },
    {
      title: "دسترسی سریع",
      items: [
        {
          titleLink: "تماس با ما",
          url: "/",
        },
        {
          titleLink: "آموزش",
          url: "/",
        },
      ],
    },
  ];
  return (
    <footer className="bg-[#e5e7eb] dark:bg-gray-900">
      <div className="mx-auto w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="https://flowbite.com/" className="flex items-center">
              <Image
                src="/images/logo-text.png"
                className="h-8 me-3"
                alt="alphagard Logo"
                width="117"
                height="35"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:w-11/12">
            {itemsFooter.map((group) => (
              <div key={group.title}>
                <strong className="mb-6 text-sm font-semibold text-secondary-900 uppercase dark:text-white">
                  {group.title}
                </strong>
                <ul className="text-gray-400 dark:text-gray-400 font-medium">
                  {group.items.map((item) => (
                    <li key={item.titleLink} className="mb-4">
                      <Link href={item.url} className="hover:underline">
                        {item.titleLink}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
