import { Link } from "react-router-dom";

type Props = {
  src: string;
  title?: string;
  content?: string;
  price?: number;
  id?: number | string;
  inventory?: number;
};
const Product = ({ src, title, content, price, id }: Props) => {
  return (
    <>
      <div className="col-md-4 row mb-3">
        <Link to={`/detail/${id}`} className="text-inherit hover:text-inherit">
          <img src={src} />
          <div className="mt-3">
            <h4>{title}</h4>
            <p>{content}</p>
            <p>{price?.toLocaleString()}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

const ProductDetail = ({ src, title, content, price, inventory }: Props) => {
  return (
    <>
      <div className="col-md-6">
        <img src={src} width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{title}</h4>
        <p>{content}</p>
        <p>{price?.toLocaleString()}원</p>
        <p className="mt-3">재고 : {inventory ?? "확인불가"}</p>
        <button className="btn btn-danger mt-3">주문하기</button>
      </div>
    </>
  );
};

export { Product, ProductDetail };
