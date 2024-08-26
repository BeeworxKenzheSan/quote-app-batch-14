import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../layout/Layout";
import QuoteList from "../copmonents/quote/QuoteList";
import { CreateQuote } from "../pages/CreateQuote";
import { UpdateQuote } from "../pages/UpdateQuote";

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <Navigate to="/quotes" />,
        },

        {
          path: "/quotes",
          element: <QuoteList />,
        },

        {
          path: "/add-quote",
          element: <CreateQuote />,
        },
        {
          path: "/update/:id",
          element: <UpdateQuote />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
