import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link className={styles.logo} to="/">
        Amazon.in
      </Link>
      <div>
        <p>Hello user!</p>
        <Link to="/cart">
          <img
            className={styles.cart}
            src="shopping-cart.png"
            alt="shopping cart"
          ></img>
        </Link>
      </div>
    </div>
  );
};
