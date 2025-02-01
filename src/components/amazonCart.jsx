import { useRecoilValue } from "recoil";
import styles from "../styles/AmazonCart.module.css";
import cartAtom from "../store/cartItemsState";
export const AmazonCart = () => {
  const cartProducts = useRecoilValue(cartAtom);

    return (
      <div className={styles.main}>
        <h2>Shopping Cart</h2>
        <div>
          {cartProducts.map((item) => {
            return (
              <CartItems
                url={item.image}
                price={item.price}
                name={item.name}
              ></CartItems>
            );
          })}
        </div>
      </div>
    );
};

function CartItems(props) {
  return (
      <div className={styles.content}>
        <img src={props.url} alt='image'></img>
        <div className={styles.name}>
          {props.name}
          <div>Price:{props.price}</div>
        </div>
      </div>
  );
}


