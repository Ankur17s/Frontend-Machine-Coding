import { Link } from "react-router";
import { useLocation } from "react-router";

const routes = [
  {
    id: 1,
    name: "Search Suggestions",
    path: "/",
  },
  {
    id: 2,
    name: "Star Rating",
    path: "/star-rating",
  },
  {
    id: 3,
    name: "Pagination",
    path: "/pagination",
  },
  {
    id: 4,
    name: "Data Table",
    path: "/data-table",
  },
  {
    id: 5,
    name: "Image Slider",
    path: "/image-slider",
  },
  {
    id: 6,
    name: "Otp Input",
    path: "/opt-input",
  },
  {
    id: 7,
    name: "TicTacToe",
    path: "/tictactoe",
  },
];

const Header = () => {
  const location = useLocation();
  return (
    <div
      className="header"
      style={{
        display: "flex",
        gap: 10,
        backgroundColor: "lightgray",
        padding: 10,
        fontWeight: 500,
      }}
    >
      {routes.map((route) => (
        <Link
          key={route.id}
          to={route.path}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span
            style={{
              cursor: "pointer",
              color: location.pathname === route.path && "blue",
            }}
          >
            {route.name}
          </span>{" "}
        </Link>
      ))}
    </div>
  );
};

export default Header;
