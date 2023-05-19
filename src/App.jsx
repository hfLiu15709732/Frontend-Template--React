import routerTab from "./config/router";
import { useRoutes } from "react-router-dom";

function App() {
  const routerMap=useRoutes(routerTab);


  return (
    <div className="App">
      {routerMap}
    </div>
  );
}

export default App;
