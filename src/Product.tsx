type Props = {
  src: string;
  title?: string;
  content?: string;
  price?: number;
};

const Product = ({ src, title, content, price }: Props) => {
  return (
    <>
      <div className="col-md-4 row">
        <img src={src} width="80%" />
        <div className="mt-3">
          <h4>{title}</h4>
          <p>{content}</p>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
};

const ProductDetail = ({ src, title, content, price }: Props) => {
  return (
    <>
      <div className="col-md-6">
        <img src={src} width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{title}</h4>
        <p>{content}</p>
        <p>{price}원</p>
        <button className="btn btn-danger">주문하기</button>
      </div>
    </>
  );
};

export { Product, ProductDetail };
