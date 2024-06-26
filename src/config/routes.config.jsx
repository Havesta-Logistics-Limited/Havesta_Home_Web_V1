import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Rider from "../pages/Rider";
import Marketplace from "../pages/Marketplace";
import News from "../pages/News";
import RouteWrapper from "../components/RouteWrapper";
import Partner from "../pages/Partner";
import About from "../pages/About/About";
import SingleNews from "../pages/SingleNews";

const routes = [
  {
    path: "/home",

    element: <RouteWrapper component={Home} hero='' />,


  },
  {
    path: "/about",
    element: (
      <RouteWrapper
        component={About}
        hero={
          "https://res.cloudinary.com/dtc89xi2r/image/upload/v1718624097/EatFood.com_7_yexfzh.png"
        }
      />
    ),
  },
  {
    path: "/contact",
    element: <RouteWrapper component={Contact} hero="/icons/contact.png" />,
  },
  {
    index: true,

    element: <RouteWrapper component={Home} hero='https://res.cloudinary.com/dtc89xi2r/image/upload/v1718725096/Group_3733_vyipoo.png' />,


  },
  {
    path: "/partner/vendors",
    element: <RouteWrapper component={Partner} hero="/icons/vendorHero.png" />,
  },
  {
    path: "/partner/riders",
    element: <RouteWrapper component={Rider} hero="/icons/rider.svg" />,
  },
  {
    path: "/news",
    element: <RouteWrapper component={News} hero="/icons/news.svg" />,
  },
  {
    path: "/news/:id",
    element: <RouteWrapper component={SingleNews} hero="/icons/news.svg" />,
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
