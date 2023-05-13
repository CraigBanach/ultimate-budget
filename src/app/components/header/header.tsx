import Link from "next/link";
import ActiveLink from "../activeLink/ActiveLink";
import styles from "./header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <nav className={styles.navContainer}>
        <Link className={styles.logoSection} href="/">
          <Image
            src="/logo.svg"
            alt="ultimate-budget Logo"
            width={56}
            height={52}
          />
          <div className={styles.logoText}>ultimate-budget</div>
        </Link>
        <div className={styles.menuSection}>
          <ActiveLink
            activeClassName={styles.active}
            className={styles.menuItem}
            href="/categories"
          >
            Categories
          </ActiveLink>
          <ActiveLink
            activeClassName={styles.active}
            className={styles.menuItem}
            href="/entries"
          >
            Entries
          </ActiveLink>
        </div>
      </nav>
      <hr className={styles.horizontalLine} />
    </div>
  );
};

export default Header;
