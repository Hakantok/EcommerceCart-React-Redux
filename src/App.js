import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CardsDetail from "./components/CardsDetail";
import Cards from "./components/Cards"
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Cards/>} />
        <Route path='/cart/:id' element={<CardsDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
