import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="grid place-items-center h-[80vh]">
        <span className="loading loading-spinner text-secondary scale-150"></span>
      </div>
    );
  }

  if (user?.email) return children;

  return <Navigate state={location.pathname} to="/login" replace />;
};

export default PrivateRoute;
