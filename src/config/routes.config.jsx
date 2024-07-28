import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Rider from "../pages/Rider";
import Marketplace from "../pages/Marketplace";
import News from "../pages/News";
import RouteWrapper from "../components/RouteWrapper";
import Partner from "../pages/Vendor";
import About from "../pages/About/About";
import SingleNews from "../pages/SingleNews";
import FinalMessageRider from "../pages/FinalMessage/FinalMessageRider";
import PrivacyPolicy from "../pages/privacypolicy";
import TermsOfUse from "../pages/termsOfUse";
const routes = [
  {
    path: "/home",

    element: <RouteWrapper component={Home} hero="" />,
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

    element: (
      <RouteWrapper
        component={Home}
        hero="https://res.cloudinary.com/dtc89xi2r/image/upload/v1718725096/Group_3733_vyipoo.png"
      />
    ),
  },
  {
    path: "/vendors",
    element: <RouteWrapper component={Partner} hero="/icons/vendorHero.png" />,
  },
  {
    path: "/riders",
    element: (
      <RouteWrapper
        component={Rider}
        hero="https://res.cloudinary.com/dtc89xi2r/image/upload/v1719527266/EatFood.com_8_exoobu.svg"
      />
    ),
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
    path: "/privacy-policy",
    element: <RouteWrapper component={PrivacyPolicy} />,
  },
  {
    path: "/terms-of-use",
    element: <RouteWrapper component={TermsOfUse} />,
  },
  {
    path: "/marketplace",
    element: <Marketplace />,
  },
  {
    path: "*",
    element: <RouteWrapper component={NotFound} hero="/icons/news.svg" />,
  },

  /*  {
    path: "/riders/congratulations/:id",
    element: (
      <RouteWrapper component={CongratulationsRider} hero="/icons/news.svg" />
    ),
  }, */
];

export default routes;
