import "./App.css";
import CakeIcon from "@material-ui/icons/Cake";
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
              <div className="app_main_innerText_top1">GREATEST</div>
              <div className="app_main_innerText_top2">CAKE FOR YOU ALL</div>
            </div>
            <div className="app_main_innerText_low">
              <span>READY IN 60 SECONDS .</span>
            </div>
          </div>
          <div className="app_main_inner_button">place order</div>
        </div>
      </div>
      <div className="app_next">SWEET CAKE</div>
    </div>
  );
}

export default App;
