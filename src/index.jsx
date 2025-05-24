import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import "./global.css";
import { AdminPage } from "./pages/AdminPage/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />,
);
