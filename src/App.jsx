import MainLayout from "./pages/MainLayout";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes.config";
import Footer from "./components/Footer";
function App() {
  return (
    <>
    <MainLayout/>
      <Routes>
        {routes.map((route, index) =>
          route.index ? (
            <Route index element={route.element} key={index} />
          ) : (
            <Route path={route.path} element={route.element} key={index} />
          )
        )}
      </Routes>
    </>
  );
}

export default App;
