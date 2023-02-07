import Landing from "./views/Landing";
import Login from "./views/Login";
import User from "./views/User";
import Template from "./template/Template";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "users/:id",
        element: <User />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <div className="App">
    //   <Landing />
    // </div>
  );
}

export default App;
