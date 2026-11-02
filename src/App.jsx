import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./common/Header";
import Dashboard from "./layout/Dashboard";
import SearchSuggestions from "./components/SearchSuggestions";
import StarRating from "./components/StarRating";
import Pagination from "./components/Pagination";
import DataTable from "./components/DataTable";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
    children: [
      {
        path: "",
        Component: SearchSuggestions,
      },
      {
        path: "star-rating",
        Component: StarRating,
      },
      {
        path: "pagination",
        Component: Pagination,
      },
      {
        path: "data-table",
        Component: DataTable,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
