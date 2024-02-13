import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="flex-column text-center py-4">
      <h4>회사 소개 페이지</h4>
      <Outlet></Outlet>
    </div>
  );
};

export default About;
