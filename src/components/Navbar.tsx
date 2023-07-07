import { Link } from "react-router-dom";

import '/src/styles/Navbar.scss'

export const Navbar = () => {
  const links = [
    { link: "/", label: "Home" },
    { link: "/favorite", label: "Favorite" },
  ];

  return (
    <header className="navbar">
      <ul className="navbar-logo">Free Games App</ul>
      <ul className="navbar__linkContainer">
        {links.map((link, index) => (
          <Link
            className="navbar__linkContainer-link"
            key={index}
            to={link.link}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </header>
  );
};
