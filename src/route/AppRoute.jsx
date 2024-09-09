import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../layout/Layout";
import QuoteList from "../copmonents/quote/QuoteList";
import { CreateQuote } from "../pages/CreateQuote";
import { UpdateQuote } from "../pages/UpdateQuote";
import AuthLayout from "../layout/AuthLayout";
import { SignInPage } from "../pages/auth/SignInPage";
import { SignUpPage } from "../pages/auth/SignUpPage";
import ProtectedRoute from "./ProtectedRouter";

const AppRoute = () => {
  const isAuth = false;
  const token = "";

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute
          isAuth={isAuth}
          token={token}
          to="/quotes"
          Component={<AuthLayout />}
        />
      ),
      children: [
        { index: true, element: <Navigate to="signIn" replace /> },
        { path: "signIn", element: <SignInPage /> },
        { path: "singUp", element: <SignUpPage /> },
      ],
    },
    {
      path: "/",
      element: (
        <ProtectedRoute
          isAuth={!isAuth}
          token={!token}
          to="signIn"
          Component={<Layout />}
        />
      ),

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
