import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar";

const Root = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <NavBar />
      <Outlet />
      </div>
    </>
  );
};

export default Root;
