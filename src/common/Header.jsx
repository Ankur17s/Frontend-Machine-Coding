import { Link } from "react-router";

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
];

const Header = () => {
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
      {routes.map((route, idx) => (
        <Link
          key={route.id}
          to={route.path}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span style={{ cursor: "pointer" }}>{route.name}</span>{" "}
        </Link>
      ))}
    </div>
  );
};

export default Header;
