import NavItem from "./NavItem";

const LINKS = [
  { key: 1, title: "Browse Meals", path: "/meals" },
  { key: 2, title: "Foodies Community", path: "/community" },
];

const NavLinks = ({ onClose, ...rest }) => {
  return (
    <nav {...rest}>
      <ul className="list-none m-0 p-0 flex max-sm:flex-col gap-[1.5rem] text-[1.25rem]">
        {LINKS.map((link) => (
          <NavItem key={link.key} {...link} onClose={onClose} />
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
