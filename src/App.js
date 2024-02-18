import { Container } from "reactstrap";
import Navi from "./components/navi/Navi";
import Dashboard from "./components/root/Dashboard";
import Calendar from "./components/common/Calendar";
import { Route, Routes } from "react-router-dom";
import CartDetail from "./components/cart/CartDetail";
import AddOrUpdateProduct from "./components/products/AddOrUpdateProduct";
import NotFound from "./components/common/NotFound";

const specialDays = [{ date: "2024-02-14", icon: "kalp.png" }];

function App() {
  return (
    <div>
      <Container>
        <Navi></Navi>
        <Routes>
          <Route path="/" exact element={<Dashboard/>}></Route>
          <Route path="/product" exact element={<Dashboard/>}/>
          <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct />}/>
          <Route path="/saveproduct" element={<AddOrUpdateProduct />}/>
          <Route path="/cart" exact element={<CartDetail/>}></Route>
          {/* <Route path="*" component={NotFound}/> */}
        </Routes>
        
        <Calendar events={specialDays}></Calendar>
      </Container>
    </div>
  );
}

export default App;
