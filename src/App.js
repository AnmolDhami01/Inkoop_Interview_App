import logo from "./logo.svg";
import "./App.css";

import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import Sidebar1 from "./Components/Sidebar_lg";
import Main1 from "./Components/Main1";
import Sidebar_lg from "./Components/Sidebar_lg";

function App() {
  return (
    <div>
      <Sidebar />
      <Sidebar_lg />
      {/* <Main /> */}
      <Main1 />
    </div>
  );
}

export default App;
