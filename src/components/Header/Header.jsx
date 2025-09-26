import css from "./Header.module.css";
import { useState } from "react";
import SearchIcon from "../../assets/icons/search.svg";
import UserIcon from "../../assets/icons/user.svg";
import BagIcon from "../../assets/icons/shoppingBag.svg";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <h1 className={css.logo}>Shopdoc</h1>
        <nav className={css.nav}>
          <a className={css.navLink} href="#">
            Home
          </a>
          <a className={css.navLink} href="#">
            About
          </a>
          <a className={css.navLink} href="#">
            Reviews
          </a>
          <a className={css.navLink} href="#">
            Contact
          </a>
          <a className={css.navLink} href="#">
            Shop
          </a>
        </nav>

        <div className={css.icons}>
          <button>
            <img src={SearchIcon} alt="Search" className={css.icon} />
          </button>

          <button>
            <img src={BagIcon} alt="Shopping Bag" className={css.icon} />
          </button>

          <button>
            <img src={UserIcon} alt="User" className={css.icon} />
          </button>

          <button
            type="button"
            className={css.burgerIcon}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : <GiHamburgerMenu />}
          </button>
        </div>
        {isOpen && (
          <div className={css.mobileNav}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Reviews</a>
            <a href="#">Contact</a>
            <a href="#">Shop</a>
          </div>
        )}
      </div>
    </header>
  );
}
