import About from "../pages/About/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Vendor from "../pages/Vendor";
import Rider from "../pages/Rider";
import Marketplace from "../pages/Marketplace";
import News from "../pages/News";
import RouteWrapper from "../components/RouteWrapper";
import Partner from "../pages/Partner";

const routes = [
  {
    path: "/home",
    element: <RouteWrapper component={Home} hero='/icons/homeHero.png' />,
  },
  {
    path: "/about",
    element: <RouteWrapper component={About} hero='/icons/about.png' />,
  },
  {
    path: "/contact",
    element: <RouteWrapper component={Contact} hero='/icons/contact.png' />,
  },
  {
    index: true,
    element: <RouteWrapper component={Home} hero='/icons/homeHero.png' />,
  },
  {
    path: "/vendor",
    element: <RouteWrapper component={Partner} hero='/icons/vendorHero.png' />,
  },
  {
    path: "/riders",
    element: <RouteWrapper component={Rider} hero='/icons/rider.svg'/>,
  },
  {
    path: "/news",
    element: <RouteWrapper component={News} hero='/icons/news.svg' />,
  },
  {
    path: "/marketplace",
    element: <Marketplace />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;

