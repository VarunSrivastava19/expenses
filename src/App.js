import { Route, Routes } from "react-router-dom";
import { Skeleton } from "./components/Skeleton";
import { View } from "./components/View";
import { useContext } from "react";
import { ThemeContext } from "./contexts/Theme";
import { Home } from "./components/Home";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app-${theme}`}>
      <ToastContainer theme={theme}/>
      <Routes>
        <Route element={<Skeleton />}>
          <Route path="/" element={<Home />} />
          <Route path="/show/:month" element={<View />} />

          <Route path="*" element={<>Hello there</>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
