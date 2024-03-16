import { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/header";
import Home from "@/routes/Home";
import Detail from "@/routes/Detail";
import About from "@/routes/About";
import Event from "@/routes/Event";
import Cart from "@/routes/Cart";

import data from "@/Data";

export const InventoryContext = createContext({});
export const TestContext = createContext({});

const App = () => {
  const [productData, setProductData] = useState(data);
  // const [inventory] = useState([10, 11, 12]);

  useEffect(() => {
    const localData = localStorage.getItem("watched");

    //loacalStorage에 값이 없을 때만
    if (!localData?.length) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);

  return (
    <>
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <Home productData={productData} setProductData={setProductData} />
            }
          />
          <Route
            path="/detail/:id"
            element={
              // <InventoryContext.Provider value={inventory ?? {}}>
              <Detail productData={productData} />
              // </InventoryContext.Provider>
            }
          />
          <Route path="/about" element={<About />}>
            <Route path="member" element={<div>Member</div>} />
            <Route path="location" element={<div>Location</div>} />
          </Route>
          <Route path="/event" element={<Event />}>
            <Route path="1" element={<div>첫 주문 시 이벤트</div>} />
            <Route path="2" element={<div>생일 기념 쿠폰</div>} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div className="py-4">Error</div>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
