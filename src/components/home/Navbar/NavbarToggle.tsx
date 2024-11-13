import { IoClose, IoMenu } from 'react-icons/io5';

type NavbarToggleProps = {
  toggleMenu: () => void;
  isOpen: boolean;
};

export default function NavbarToggle({
  toggleMenu,
  isOpen
}: NavbarToggleProps) {
  return (
    <button className="md:hidden" aria-label="Mobile menu" onClick={toggleMenu}>
      {isOpen ? (
        <IoClose
          size={32}
          color="#FFFFFF"
          className="data-[] transition duration-1000 ease-in "
        />
      ) : (
        <IoMenu
          size={32}
          color="#FFFFFF"
          className="transition duration-1000 ease-in "
        />
      )}
    </button>
  );
}
