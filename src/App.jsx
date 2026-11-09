import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./layout/Dashboard";
import SearchSuggestions from "./components/SearchSuggestions";
import StarRating from "./components/StarRating";
import Pagination from "./components/Pagination";
import DataTable from "./components/DataTable";
import ImageSlider from "./components/ImageSlider";
import OtpInput from "./components/OtpInput";

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
      {
        path: "image-slider",
        Component: ImageSlider,
      },
      {
        path: "opt-input",
        Component: OtpInput,
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
