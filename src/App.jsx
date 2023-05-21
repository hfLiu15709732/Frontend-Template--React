import routerTab from "./config/router";
import { useRoutes } from "react-router-dom";

function App() {
  const routerMap=useRoutes(routerTab);


  return (
    <div className="App">
      {routerMap}
      {/* 路由映射表 */}
    </div>
  );
}

export default App;
