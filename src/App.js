import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/detail/:id",
      element: <Detail />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;