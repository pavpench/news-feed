import Link from "next/link";

export default function Layout({ children }) {
  const links = [
    { title: "Home", path: "/" },
    { title: "Top Stories", path: "/news/top-stories" },
    { title: "Popular", path: "/news/popular" },
    { title: "Sections", path: "/sections" },
  ];
  return (
    <>
      <div className="header-nav">
        {links.map((link) => {
          return (
            <Link key={link.path} href={link.path}>
              {link.title}
            </Link>
          );
        })}
      </div>
      {children}
    </>
  );
}
