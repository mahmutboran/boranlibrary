import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = ({storageUser}) => {
  return storageUser ? <Outlet  /> : <Navigate to="/login" />;
};

export default PrivateRouter;
