import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Menu from "../src/components/Menu";
import Home from "./components/Home Page/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ErrorMsg from "../src/components/ErrorMsg";

function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Menu />,
      errorElement: <ErrorMsg/>,
      children: [
        {
          path: '/',
          element: <Home />,
        }
        ,
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/service",
          loader: () => fetch('teamData.json'),
          element: <Services />
        },
        {
          path: '/contact',
          element: <Contact /> // Fixed the missing closing bracket
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
