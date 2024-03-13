import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Props } from "@/Data";
import { ProductDetail } from "@/Product";
import { Nav } from "react-bootstrap";
import { InventoryContext } from "@/App";

const Detail = ({ productData }: { productData: Props }) => {
  const inventoryData = useContext(InventoryContext) as [];

  const [arlert, setAlert] = useState(true);
  const [tab, setTab] = useState(0);
  const { id } = useParams();
  const select = productData.find((x) => {
    return x.id == id;
  });

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  return (
    <div className="container flex flex-column">
      {arlert && (
        <div className="alert alert-warning p-4 mt-4">2초이내 구매 시 할인</div>
      )}
      <div className="row row-gap-3 my-5">
        <div>재고 : {inventoryData}</div>
        <ProductDetail
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title={select?.title}
          content={select?.content}
          price={select?.price}
        />
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => setTab(0)}>
            버튼 0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => setTab(1)}>
            버튼 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => setTab(2)}>
            버튼 2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {tab === 0 && <div className="py-2 px-3">내용 0</div>}
      {tab === 1 && <div className="py-2 px-3">내용 1</div>}
      {tab === 2 && <div className="py-2 px-3">내용 2</div>}
    </div>
  );
};

export default Detail;
