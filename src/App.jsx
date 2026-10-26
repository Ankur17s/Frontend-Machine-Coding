import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./common/Header";
import Dashboard from "./layout/Dashboard";
import SearchSuggestions from "./components/SearchSuggestions";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
    children: [
      {
        path: "",
        Component: SearchSuggestions,
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
