import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./component/sidebar";
import ThemeContext from "./component/context/themeContext";
import Dashboard from "./component/dashboard/dashboard";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <ThemeContext>
            <Sidebar>
              <Routes>
                <Route path="/*" element={<Dashboard />} />
                <Route path="/7*" element={<Dashboard />} />
              </Routes>
            </Sidebar>
          </ThemeContext>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
