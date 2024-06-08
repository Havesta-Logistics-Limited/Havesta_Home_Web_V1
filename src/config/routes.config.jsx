import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Vendor from "../pages/Vendor";
import Rider from "../pages/Rider";
import Marketplace from "../pages/Marketplace";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/vendor',
    element: <Vendor />,
  },
  {
    path: '/rider',
    element: <Rider />,
  },
  {
    path: '/marketplace',
    element: <Marketplace />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  
];

export default routes;
