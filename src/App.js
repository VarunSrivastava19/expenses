import { Route, Routes } from "react-router-dom";
import { Skeleton } from "./components/Skeleton";
import { View } from "./components/View";
import { useContext } from "react";
import { ThemeContext } from "./contexts/Theme";
import { Home } from "./components/Home";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Custom404 } from "./components/Custom404";
import { Query } from "./components/Query";
const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app-${theme}`}>
      <ToastContainer closeOnClick position="bottom-right" theme={theme}/>
      <Routes>
        <Route element={<Skeleton />}>
          <Route path="/" element={<Home />} />
          <Route path="/query" element={<Query />} />
          <Route path="/show/:month" element={<View />} />
          <Route path="*" element={<Custom404 />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
