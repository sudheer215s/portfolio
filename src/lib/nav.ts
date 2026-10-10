export interface NavLink {
  name: string;
  href: string;
}

// Full navigation order: the phone menu on inner pages, and footer "Next" pagination.
export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/side-projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "User Manual", href: "/user-manual" },
  { name: "Books", href: "/books" },
  { name: "Resume", href: "/resume" },
  { name: "Writing", href: "/writing" },
];

export function isNavLinkActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
