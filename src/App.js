import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Homepage from "./pages/homepage";
import Catalog from "./pages/catalog";
import Header from "./components/header";
function App() {
  return (
   <div>
      <Header/>
      <Routes>
        <Route path= "/" element = {<Homepage/>}/>
        <Route path= "/Catalog" element = {<Catalog/>}/>
      </Routes>
      </div>
  );
}

export default App;
