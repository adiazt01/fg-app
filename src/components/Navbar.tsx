import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const links = [
    { link: "/", label: "Home" },
    { link: "/favorite", label: "Favorite" },
  ];

  return (
    <header>
      <ul>Armando Diaz</ul>
      <ul>
        {links.map((link, index) => (
          <NavLink key={index} to={link.link}>{link.label}</NavLink>
        ))}
      </ul>
    </header>
  );
};
