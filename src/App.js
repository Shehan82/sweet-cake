import "./App.css";
import CakeIcon from "@material-ui/icons/Cake";
function App() {
  return (
    <div className="app">
      <div className="app_main">
        <div className="app_navBar">
          <div className="app_navBar_header">SWEET CAKE</div>
          <div className="app_navBar_menu">
            <div className="app_navBar_menu_text">Menu</div>
            <div className="app_navBar_menu_icon">
              <CakeIcon style={{ fontSize: 40 }} />
            </div>
          </div>
        </div>
      </div>
      <div className="app_next">SWEET CAKE</div>
    </div>
  );
}

export default App;
