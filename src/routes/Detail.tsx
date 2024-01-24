import { Props } from "@/Data";
import { ProductDetail } from "@/Product";
import { useParams } from "react-router-dom";

const Detail = ({ productData }: { productData: Props }) => {
  const { id } = useParams();
  const select = productData.find((x) => {
    return x.id == id;
  });

  return (
    <div className="container">
      <div className="row row-gap-3 my-5">
        <ProductDetail
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title={select?.title}
          content={select?.content}
          price={select?.price}
        />
      </div>
    </div>
  );
};

export default Detail;
