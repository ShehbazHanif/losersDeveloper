import React from "react";
import "../../pages/Project/ProjectPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context("../../img", true);
console.log("o", proyectImg);

const Project = () => {
  return (
    <section className="proyectos" id="proyectos">
      <h2 className="heading">
        <FormattedMessage id="projects" defaultMessage="Projects" />
      </h2>
      <div
        className="proyect-site"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <Swiper
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="proyectos-slider mySwiper">
          <SwiperSlide className="caja">
            <img src={proyectImg(`./drivebidz1.png`)} alt="proyectos" />
            <div className="content">
              <h3>Drive Bidz</h3>
              <p>Buying And Selling Cars</p>
              <p className="tecnologias">
                React
                <span> -</span> CSS
                <span> -</span> Redux
                <span> -</span> Bootstrap
                <span> -</span> JavaScript
                <span> -</span> NodeJS
                <span> -</span> MongoDB
              </p>
              <a
                href="https://dribebidzupdated.netlify.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer">
                <span>Demo</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./medass.png`)} alt="proyectos" />
            <div className="content">
              <h3>medvox</h3>
              <p>MedAI Nursing Assistant</p>
              <p className="tecnologias">
                React
                <span> -</span> CSS
                <span> -</span> Redux
                <span> -</span> Bootstrap
                <span> -</span> JavaScript
                <span> -</span> NodeJS
                <span> -</span> MongoDB
              </p>
              <a
                href="https://medvox-ai.netlify.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer">
                <span>Demo</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./camper.png`)} alt="proyectos" />
            <div className="content">
              <h3>Camper</h3>
              <p>
                The first international social media platform for campers and
                travelers
              </p>
              <p className="tecnologias">
                React
                <span> -</span> CSS
                <span> -</span> Redux
                <span> -</span> Bootstrap
                <span> -</span> JavaScript
                <span> -</span> NodeJS
                <span> -</span> MongoDB
              </p>
              <a
                href="https://camperdooly-web.netlify.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer">
                <span>Demo</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./stellaComesti.png`)} alt="proyectos" />
            <div className="content">
              <h3>Stella Comestic</h3>
              <p>
                Discover premium cosmetics to elevate your beauty routine. Our
                curated collection brings quality and care in every product.
              </p>
              <p className="tecnologias">
                React
                <span> -</span> CSS
                <span> -</span> Redux
                <span> -</span> Bootstrap
                <span> -</span> JavaScript
                <span> -</span> NodeJS
                <span> -</span> MongoDB
              </p>
              <a
                href="https://stellla.netlify.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer">
                <span>Demo</span>
              </a>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="caja">
            <img src={proyectImg(`./proyecto-6.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Spider-Man fan page</h3>
              <p>Fan page Spider-Man</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
                <span> -</span> Bootstrap
              </p>
              <a
                href="https://nahuel61920.github.io/Spider-Man/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer">
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/Nahuel61920/Spider-Man"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./proyecto-12.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>EveryRunnig</h3>
              <p>Website shoes</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
                <span> -</span> Bootstrap
              </p>
              <a
                href="https://nahuel61920.github.io/EveryRunning/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer">
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/Nahuel61920/EveryRunning"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./proyecto-5.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Premier Food</h3>
              <p>Fast food</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
                <span> -</span> Sass
              </p>
              <a
                href="https://nahuel61920.github.io/PremierFood/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer">
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/Nahuel61920/PremierFood"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./proyecto-8.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>ShopTec</h3>
              <p>Ecommerce</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> Sass
                <span> -</span> JavaScript
              </p>
              <a
                href="https://nahuel61920.github.io/shop-tec/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer">
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/Nahuel61920/shop-tec"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./proyecto-10.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Elegant Hand</h3>
              <p>Watch Shop</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
              </p>
              <a
                href="https://nahuel61920.github.io/ElegantHand/ "
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer">
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/Nahuel61920/ElegantHand"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./proyecto-9.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Vida en papel</h3>
              <p>Bookstore</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
              </p>
              <a
                href="https://nahuel61920.github.io/vida-en-papel/ "
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer">
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/Nahuel61920/vida-en-papel"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./proyecto-11.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Plus Anime</h3>
              <p>Anime website</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
              </p>
              <a
                href="https://nahuel61920.github.io/PlusAnime/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer">
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/Nahuel61920/PlusAnime"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </SwiperSlide> */}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
      {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
      {/* <div className="portafolio-btn">
        <Link to="/project">
          <ButtomGet />
        </Link>
      </div> */}
    </section>
  );
};
export default React.memo(Project);
