import { Outlet } from "react-router-dom";

const Event = () => {
  return (
    <div className="flex-column text-center py-4">
      <h4>이벤트 페이지</h4>
      <Outlet></Outlet>
    </div>
  );
};

export default Event;
