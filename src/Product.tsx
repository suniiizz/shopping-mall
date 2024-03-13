type Props = {
  src: string;
  title?: string;
  content?: string;
  price?: number;
};

const Product = ({ src, title, content, price }: Props) => {
  return (
    <>
      <div className="col-md-4 row mb-3">
        <img src={src} width="80%" />
        <div className="mt-3">
          <h4>{title}</h4>
          <p>{content}</p>
          <p>{price?.toLocaleString()}</p>
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
        <p>{price?.toLocaleString()}원</p>
        <button className="btn btn-danger mt-3">주문하기</button>
      </div>
    </>
  );
};

export { Product, ProductDetail };
