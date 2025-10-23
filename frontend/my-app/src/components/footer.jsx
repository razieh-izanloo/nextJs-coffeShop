import { Fragment } from "react";

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
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="/images/logo-text.png"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:w-11/12">
            <div>
              {itemsFooter.map((group) => (
                <Fragment key={group.title}>
                  <strong className="mb-6 text-sm font-semibold text-secondary-900 uppercase dark:text-white">
                    {group.title}
                  </strong>
                  <ul className="text-gray-400 dark:text-gray-400 font-medium">
                    {group.items.map((item) => (
                      <li key={item.titleLink} className="mb-4">
                        <a href={item.url} className="hover:underline">
                          {item.titleLink}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
