import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [{
    id: 1,
    path: '/',
    text: 'Home',
  }];
  return (
    <nav className="navBar">
      <div>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
