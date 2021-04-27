import "./App.css";
import CakeIcon from "@material-ui/icons/Cake";
import Item from "./Item";
function App() {
  return (
    <div className="app">
      <div className="app_main">
        <div className="app_navBar">
          <div className="app_navBar_header">SWEET CAKE </div>
          <div className="app_navBar_menu">
            <div className="app_navBar_menu_text">Menu</div>
            <div className="app_navBar_menu_icon">
              <CakeIcon style={{ fontSize: 30 }} />
            </div>
          </div>
        </div>
        <div className="app_main_inner">
          <div className="app_main_innerText">
            <div className="app_main_innerText_top">
              <div className="app_main_innerText_top1">SWEETEST</div>
              <div className="app_main_innerText_top2">CAKE FOR YOU </div>
            </div>
            <div className="app_main_innerText_low">
              <span>READY IN 60 SECONDS .</span>
            </div>
          </div>
          <div className="app_main_inner_button">place order</div>
        </div>
      </div>
      <div className="app_second">
        <div className="app_second_header">Choose your favourite</div>
        <div className="app_second_itemBox">
          <Item
            imgUrl="https://i.ibb.co/9G6VGpH/pexels-pranjall-kumar-7381533.jpg"
            name="Sweet Mingle"
            desc="The very sweet Italian cake"
            price="$ 23"
          />
          <Item
            imgUrl="https://i.ibb.co/VT7K0TD/pexels-nataliya-vaitkevich-4692169.jpg"
            name="Sweet Mingle"
            desc="The very sweet Italian cake"
            price="$ 18"
          />
          <Item
            imgUrl="https://i.ibb.co/89XvvvK/pexels-irwan-fauzi-4858510.jpg"
            name="Sweet Mingle"
            desc="The very sweet Italian cake"
            price="$ 16"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
