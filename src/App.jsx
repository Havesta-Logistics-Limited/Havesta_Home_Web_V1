import { Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import routes from "./config/routes.config";
import CongratulationsRider from "./pages/Congratulations/CongratulationsRider";
import UploadRider from "./pages/Upload/UploadRider";
import FinalMessageRider from "./pages/FinalMessage/FinalMessageRider";
import ScrollToTop from "./common/scrollToTop";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes.map((route, index) =>
            route.index ? (
              <Route index element={route.element} key={index} />
            ) : (
              <Route path={route.path} element={route.element} key={index} />
            )
          )}
        </Route>
        <Route
          path="/riders/congratulations/:id"
          element={<CongratulationsRider />}
        />
        <Route path="/rider/upload" element={<UploadRider />} />
        <Route path="/finalmessage" element={<FinalMessageRider />} />
      </Routes>
    </>
  );
}

export default App;
