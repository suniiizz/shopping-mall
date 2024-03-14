import { Outlet } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { addCount, CartStateType, increase, UserStateType } from "@/store";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: CartStateType) => state.cart);
  const test = useSelector((state: UserStateType) => state.user);

  return (
    <div className="flex-column text-center py-4 px-4">
      <div>{test.name}</div>
      <div>{test.age}</div>
      <button
        onClick={() => {
          dispatch(increase(10));
        }}
      >
        버튼임
      </button>
      <Outlet></Outlet>
      <Table>
        <thead>
          <tr>
            <th className="border-black !border-b-2">#</th>
            <th className="border-black !border-b-2">상품명</th>
            <th className="border-black !border-b-2">수량</th>
            <th className="border-black !border-b-2">변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.map((a, i) => {
            return (
              <tr key={a.id} className="text-center align-middle">
                <td>{state[i].id}</td>
                <td>{state[i].name}</td>
                <td>{state[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(addCount(state[i].id));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
