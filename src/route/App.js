import { lazy, Suspense, Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Spin, Result, Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./App.scss";

const AuthViewWrapper = lazy(() => import("../views/d"));

const LoadingMessage = () => (
  <div
    style={{
      background: "#e5eff1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%",
    }}
  >
    <div className="spin">
      <Spin
        size="small"
        indicator={
          <LoadingOutlined style={{ fontSize: 24, color: "#00A3A1" }} spin />
        }
      />
    </div>
  </div>
);

const FourZeroFour = () => (
  <div
    style={{
      background: "#e5eff1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%",
    }}
  >
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link to="/">Back Home</Link>
        </Button>
      }
    />
  </div>
);

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <Suspense fallback={<LoadingMessage />}>
          <Switch>
            {/* protected route with shared components. */}
            <Route exact path="/" component={AuthViewWrapper} />
            <Route path="*" component={FourZeroFour} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
export default App;
