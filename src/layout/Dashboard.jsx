import { Outlet } from "react-router";
import Header from "../common/Header";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
