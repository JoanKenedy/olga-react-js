import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrincipalLayout } from "./layouts/PrincipalLayout";
import { Home } from "./pages/Home";
import { SobreMi } from "./pages/SobreMi";
import { Servicios } from "./pages/Servicios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrincipalLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre-mi",
        element: <SobreMi />,
      },
      {
        path: "/servicios",
        element: <Servicios />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
