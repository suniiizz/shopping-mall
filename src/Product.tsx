type Props = {
  src: string;
  title: string;
  content: string;
  price: number;
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

export default Product;
