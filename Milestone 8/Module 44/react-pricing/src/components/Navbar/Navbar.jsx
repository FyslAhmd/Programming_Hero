import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navbarData = [
  { name: "Home", url: "/", id: 1 },
  { name: "About", url: "/about", id: 2 },
  { name: "Services", url: "/services", id: 3 },
  { name: "Contact", url: "/contact", id: 4 },
  { name: "Blog", url: "/blog", id: 5 },
];

const links = navbarData.map((link) => (
  <li className="mr-10 text-xl" key={link.id}>
    <a href={link.url}>{link.name}</a>
  </li>
));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-around items-center text-xl mt-5">
      <span className="flex items-center" onClick={() => setOpen(!open)}>
        {open ? <X className="md:hidden" /> : <Menu className="md:hidden" />}
        <ul className={`md:hidden absolute duration-500 ${open ? 'top-12' : '-top-40'}`}>{links}</ul>
        <h2 className="ml-5">React Pricing</h2>
      </span>
      <ul className="md:flex md:justify-center md:items-center hidden">
        {links}
      </ul>
      <button>Sign In</button>
    </nav>
  );
};

export default Navbar;
