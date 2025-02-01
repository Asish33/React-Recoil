import { Navbar } from "./components/navbar";
import { WishList } from "./components/wishList";
import { AmazonCart } from "./components/amazonCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<WishList />}></Route>
            <Route path="/cart" element={<AmazonCart />}></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
