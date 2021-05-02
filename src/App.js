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
              <CakeIcon style={{ fontSize: 20 }} />
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
              <span>READY IN 60 SECONDS</span>
            </div>
          </div>
          <div className="app_main_inner_button">place order</div>
        </div>
      </div>
      <div className="app_second app_second_only">
        <div className="app_second_header">Choose your favourite</div>
        <div className="box">
          <div className="app_second_itemBox app_slider_one">
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
            <Item
              imgUrl="https://i.ibb.co/89XvvvK/pexels-irwan-fauzi-4858510.jpg"
              name="Sweet Mingle"
              desc="The very sweet Italian cake"
              price="$ 16"
            />
            <Item
              imgUrl="https://i.ibb.co/89XvvvK/pexels-irwan-fauzi-4858510.jpg"
              name="Sweet Mingle"
              desc="The very sweet Italian cake"
              price="$ 16"
            />
            <Item
              imgUrl="https://i.ibb.co/89XvvvK/pexels-irwan-fauzi-4858510.jpg"
              name="Sweet Mingle"
              desc="The very sweet Italian cake"
              price="$ 16"
            />
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
              price="$ 1000"
            />
            <Item
              imgUrl="https://i.ibb.co/89XvvvK/pexels-irwan-fauzi-4858510.jpg"
              name="Sweet Mingle"
              desc="The very sweet Italian cake"
              price="$ 1000"
            />
          </div>
        </div>

        <div className="app_third">
          <div className="app_third_photoBox">
            <div className="app_third_detailsBox">
              <div className="detailsBox_header">Cake of the Day</div>
              <div className="detailsBox_content">
                Cake with donut with Grapes
              </div>
              <div className="detailsBox_buttonContainer">
                <div className="detailsBox_button">Order now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="app_second app_fourth">
          <div className="app_second_header">Sweet treats for you</div>
          <div className="box">
            <div className="app_second_itemBox app_slider_two">
              <Item
                imgUrl="https://i.ibb.co/5TRJwk3/pexels-cesar-de-la-cruz-3185509.jpg"
                name="Sweet Mingle"
                desc="The very sweet Italian cake"
                price="$ 23"
              />
              <Item
                imgUrl="https://i.ibb.co/59DFFT5/pexels-elif-tekkaya-5765719.jpg"
                name="Sweet Mingle"
                desc="The very sweet Italian cake"
                price="$ 18"
              />
              <Item
                imgUrl="https://i.ibb.co/xS8XfVh/pexels-mauro-savoca-5995769.jpg"
                name="Sweet Mingle"
                desc="The very sweet Italian cake"
                price="$ 16"
              />
              <Item
                imgUrl="https://i.ibb.co/5TRJwk3/pexels-cesar-de-la-cruz-3185509.jpg"
                name="Sweet Mingle"
                desc="The very sweet Italian cake"
                price="$ 23"
              />
              <Item
                imgUrl="https://i.ibb.co/59DFFT5/pexels-elif-tekkaya-5765719.jpg"
                name="Sweet Mingle"
                desc="The very sweet Italian cake"
                price="$ 18"
              />
              <Item
                imgUrl="https://i.ibb.co/xS8XfVh/pexels-mauro-savoca-5995769.jpg"
                name="Sweet Mingle"
                desc="The very sweet Italian cake"
                price="$ 16"
              />
            </div>
          </div>
        </div>
        <div className="app_second_fifth">
          <div className="btm_products"></div>
          <div className="btm_branches"></div>
          <div className="btm_address"></div>
          <div className="btm_contacts"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
