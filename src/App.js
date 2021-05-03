import "./App.css";
import CakeIcon from "@material-ui/icons/Cake";
import Item from "./Item";
import FacebookIcon from "@material-ui/icons/Facebook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
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
                Harvest grapes olive oil cake
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
                name="Sweet Treats"
                desc="A dense chocolate cake for those of us who can't tolerate wheat or gluten"
                price="$ 23"
              />
              <Item
                imgUrl="https://i.ibb.co/59DFFT5/pexels-elif-tekkaya-5765719.jpg"
                name="Sweet Treats"
                desc="A dense chocolate cake for those of us who can't tolerate wheat or gluten"
                price="$ 18"
              />
              <Item
                imgUrl="https://i.ibb.co/xS8XfVh/pexels-mauro-savoca-5995769.jpg"
                name="Sweet Treats"
                desc="A dense chocolate cake for those of us who can't tolerate wheat or gluten"
                price="$ 16"
              />
              <Item
                imgUrl="https://i.ibb.co/5TRJwk3/pexels-cesar-de-la-cruz-3185509.jpg"
                name="Sweet Treats"
                desc="A dense chocolate cake for those of us who can't tolerate wheat or gluten"
                price="$ 23"
              />
              <Item
                imgUrl="https://i.ibb.co/59DFFT5/pexels-elif-tekkaya-5765719.jpg"
                name="Sweet Treats"
                desc="A dense chocolate cake for those of us who can't tolerate wheat or gluten"
                price="$ 18"
              />
              <Item
                imgUrl="https://i.ibb.co/xS8XfVh/pexels-mauro-savoca-5995769.jpg"
                name="Sweet Treats"
                desc="A dense chocolate cake for those of us who can't tolerate wheat or gluten"
                price="$ 16"
              />
            </div>
          </div>
        </div>
        <div className="app_second_fifth">
          <div className="btm_products">
            <span className="btm_header">Products</span>
            <span className="btm_content">Cakes</span>
            <span className="btm_content">Mufffins</span>
            <span className="btm_content">Baked Goods</span>
            <span className="btm_content">Sweet Goods</span>
          </div>
          <div className="btm_branches">
            <span className="btm_header">Branches</span>
            <span className="btm_content">Kurunegala</span>
            <span className="btm_content">Colombo</span>
            <span className="btm_content">Kandy</span>
            <span className="btm_content">Mathara</span>
            <span className="btm_content">Galle</span>
          </div>
          <div className="btm_address">
            <span className="btm_header">Address</span>
            <span className="btm_content">No: 56</span>
            <span className="btm_content">Parakumba Road</span>
            <span className="btm_content">Kurunegala</span>
          </div>
          <div className="btm_contacts">
            <span className="btm_header">Contact Us</span>
            <span className="btm_content">
              {" "}
              <FontAwesomeIcon icon={faFacebook} size={"2x"} />
            </span>
            <span className="btm_content">
              <FontAwesomeIcon icon={faTwitter} size={"2x"} />
            </span>
            <span className="btm_content">
              <FontAwesomeIcon icon={faEnvelope} size={"2x"} />
            </span>
            <span className="btm_content">
              <FontAwesomeIcon icon={faInstagram} size={"2x"} />
            </span>
            <span className="btm_content">
              <FontAwesomeIcon icon={faWhatsapp} size={"2x"} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
