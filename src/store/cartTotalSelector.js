import { selector } from "recoil";
import cartAtom from "./cartItemsState";

const cartSelector = selector({
  key: "cartSelector",
  get: ({ get }) => {
    const data = get(cartAtom);
    const totalprice = data.reduce((acc, item) => {
      return acc + item.price;
    });
  },
});

export default cartSelector;
