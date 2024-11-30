import { createBrowserRouter } from "react-router-dom";
import QRHtmlPage from "../pages/QRHtmlpage";

const router = createBrowserRouter([
  {
    path: "/user/:id",
    element: <QRHtmlPage />,
  },
]);

export default router;
