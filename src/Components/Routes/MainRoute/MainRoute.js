import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayouts/MainLayout";
import Home from "../../Page/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>No fount 404</div>,
    children: [{ path: "/home", element: <Home /> }],
  },
]);
