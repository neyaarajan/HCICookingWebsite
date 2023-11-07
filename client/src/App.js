
import { MyRoutes } from "./Routes.js"
import "./App.css"
import data from './data/mockData.js'


function App() {
  return (
    <MyRoutes data = {data}/>
  );
}

export default App;
