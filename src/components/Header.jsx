import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
// import HomeIcon from '../assets/home-icon.png'; // ホームアイコン画像

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        {/* <img src={HomeIcon} alt="Home" /> */}
        🏠 {/* アイコンの代わり */}
      </Link>
      <nav className={styles.nav}>
        {/* NavLinkを使うと、現在表示中のリンクにスタイルを適用できる */}
        <NavLink to="/about" className={({isActive}) => isActive ? styles.activeLink : styles.link}>
          About
        </NavLink>
        <NavLink to="/works" className={({isActive}) => isActive ? styles.activeLink : styles.link}>
          Works
        </NavLink>
        <NavLink to="/skills" className={({isActive}) => isActive ? styles.activeLink : styles.link}>
          Skills
        </NavLink>
        <NavLink to="/connect" className={({isActive}) => isActive ? styles.activeLink : styles.link}>
          Connect
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;