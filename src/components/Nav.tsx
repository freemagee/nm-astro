import { INav } from "@typings";

const mainPages: INav[] = [
  {
    label: "Home",
    url: "/.",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Blog",
    url: "/blog",
  },
];

const Nav = () => {
  return (
    <nav>
      {mainPages.map((page) => (
        <a href={page.url}>{page.label}</a>
      ))}
    </nav>
  );
};

export default Nav;
