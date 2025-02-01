import { atom } from "recoil";

const cartAtom = atom({
  key: "cartAtom",
  default: [
    {
      id: 4,
      name: "Wall Art 1",
      price: 1500.0,
      image: "https://m.media-amazon.com/images/I/41wE694AKFL._SS220_.jpg",
      rating: 4.3,
      reviews: 800,
      oldPrice: 1800.0,
      quantity: 1,
    },
  ],
});

export default cartAtom;
