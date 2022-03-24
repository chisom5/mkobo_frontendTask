import { lazy, useState, useEffect } from "react";
import HeaderComponent from "../../components/header";
import Sidebar from "../../components/sidebar";
import { Route, useLocation } from "react-router-dom";

const Dashboard = lazy(() => import("../dashboard"));

const AuthViewWrapper = () => {
  const location = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => {
    if (location.pathname !== undefined) setPath(location.pathname);
  }, [location.pathname]);

  console.log(path);
  return (
    <div className="route_container">
      <Sidebar path={path} />

      <div className="route_container_content">
        <HeaderComponent path={path} />

        <div className="main_content">
          <Route exact path="/" component={Dashboard} />
        </div>
      </div>
    </div>
  );
};

export default AuthViewWrapper;
