"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/client",
    label: "client",
  },
  {
    href: "/drinks",
    label: "drinks",
  },
  {
    href: "/prisma-example",
    label: "prisma",
  },
  {
    href: "/tasks",
    label: "tasks",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Next.js
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map((link) => {
            return (
              <li key={link.href} className="px-2">
                <Link
                  href={link.href}
                  className={`uppercase ${
                    pathname === link.href ? "active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
