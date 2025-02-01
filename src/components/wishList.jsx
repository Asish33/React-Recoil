import { useSetRecoilState, useRecoilValue } from "recoil";
import styles from "../styles/WishList.module.css";
import wishatom from "../store/wishItemsState";
import cartAtom from "../store/cartItemsState";

export const WishList = () => {
  const WishListdata = useRecoilValue(wishatom);
  const setCartData = useSetRecoilState(cartAtom);
  

  function cartAdd(item) {
    setCartData((prevData) => {
      return [...prevData, item];
    });
  }
  return (
    <div className={styles.container}>
      {WishListdata.map((item) => (
        <Box
          key={item.id}
          name={item.name}
          url={item.image}
          price={item.price}
          ToAddCart={()=>cartAdd(item)}
        />
      ))}
    </div>
  );
};



function Box(props) {
  return (
    <div className={styles.block}>
      <img className={styles.image} src={props.url} alt={props.name} />
      <div className={styles.inside}>
        {props.name}
        <div>Price: ${props.price}</div>
        <button onClick={props.ToAddCart}>Add to Cart</button>
      </div>
    </div>
  );
}
