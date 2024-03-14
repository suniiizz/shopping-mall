import { useState } from "react";
import axios from "axios";

import { Props } from "@/Data";
import { Product } from "@/Product";

const Home = ({
  productData,
  setProductData,
}: {
  productData: Props;
  setProductData: React.Dispatch<React.SetStateAction<Props>>;
}) => {
  const [buttonNum, setButtonNum] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleMoreProduct = () => {
    setButtonNum((prev) => prev + 1);

    if (buttonNum === 3) {
      return alert("상품이 더 없습니다!");
    } else {
      setLoading(true);
      axios
        .get(
          `https://codingapple1.github.io/shop/data${buttonNum === 2 ? "3" : "2"}.json`
        )
        .then((data) => {
          setProductData((prev) => [...prev, ...data.data]);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          alert("데이터를 가져오는데 실패하였습니다.");
        });
    }

    return;
  };

  return (
    <>
      <div className="main-bg"></div>

      <div className="container mt-4">
        <div className="flex row justify-content-center">
          {productData.map((item) => {
            return (
              <Product
                key={item.id}
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title={item.title}
                content={item.content}
                price={item.price}
                id={item.id}
              />
            );
          })}
          {loading && (
            <div className="flex justify-center my-4">Loading...</div>
          )}
        </div>
      </div>

      <div className="w-full mt-3 mb-10">
        <button
          onClick={() => {
            handleMoreProduct();
          }}
        >
          더보기
        </button>
      </div>
    </>
  );
};

export default Home;
