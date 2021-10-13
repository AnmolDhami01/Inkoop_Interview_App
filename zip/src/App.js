import logo from "./logo.svg";
import "./App.css";

import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import Sidebar1 from "./Components/Sidebar1";
import Main1 from "./Components/Main1";

function App() {
  return (
    <div>
      <Sidebar />
      <Sidebar1 />
      {/* <Main /> */}
      <Main1 />
    </div>
  );
}

export default App;
