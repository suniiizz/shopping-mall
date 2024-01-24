import { Props } from "@/Data";
import { Product } from "@/Product";

const Home = ({ productData }: { productData: Props }) => {
  return (
    <>
      <div className="main-bg"></div>

      <div className="container mt-4">
        <div className="row justify-content-center">
          {productData.map((item) => {
            return (
              <Product
                key={item.id}
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title={item.title}
                content={item.content}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
