import React from "react";
import Helmet from "../components/Helmet/Helmet";
import HomepageHeader from "../components/HomepageHeader/HomepageHeader";
import HomepageFooter from "../components/HomepageFooter/HomepageFooter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../components/homepage.css";
import { Container, Row, Col } from "reactstrap";
import heroImg1 from "../assets/images/hero-img1.jpg";
import offer2 from "../assets/images/offer2.avif";
import offer3 from "../assets/images/offer3.avif";
import offer4 from "../assets/images/offer4.avif";
import offer5 from "../assets/images/offer5.avif";
import specialOffer from "../assets/images/specialOffer.png";
import Services from "../services/Services";
//import CarsList from "./Ul/CarsList";
//import products from "../assets/data/products";
import Clock from "./Ul/Clock";
import Slider from "react-slick";

//import { useNavigate } from "react-router-dom";

import { useGetCarsQuery } from "../features/cars/carsApiSlice";

const Public = () => {
  const year = new Date().getFullYear();

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const {
    data: cars,
    //isLoading,
    isSuccess,
    //isError,
    // error,
  } = useGetCarsQuery("carsList", {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  // useEffect(() => {
  //   const filteredMostPopularCars = products.filter(
  //     (item) => item.category === "MERCEDES-BENZ"
  //   );

  //   const filteredNewCars = products.filter((item) => item.category === "AUDI");

  //   const filteredCityCars = products.filter((item) => item.category === "BMW");

  //   const filteredFamilyCars = products.filter(
  //     (item) => item.category === "Porsche"
  //   );

  //   setMostPopularCars(filteredMostPopularCars);
  //   setNewCars(filteredNewCars);
  //   setCityCars(filteredCityCars);
  //   setFamilyCars(filteredFamilyCars);
  // }, []);

  // const [mostPopularCars, setMostPopularCars] = useState([]);
  // const [newCars, setNewCars] = useState([]);
  // const [cityCars, setCityCars] = useState([]);
  // const [familyCars, setFamilyCars] = useState([]);

  // const selectedFields = [
  //   { label: "Marka", field: "brand" },
  //   { label: "Model", field: "model" },
  //   { label: "Cena za dzień (PLN)", field: "price" },
  //   {
  //     label: "Zdjęcia pojazdu",
  //     field: "images",
  //     format: (value) => (
  //       <div className="car-images">
  //         {value.map((imageUrl, index) => (
  //           <img
  //             key={index}
  //             src={imageUrl}
  //             alt={`${index + 1}`}
  //             style={{ maxWidth: "100px" }}
  //           />
  //         ))}
  //       </div>
  //     ),
  //   },
  // ];

  // const navigate = useNavigate();

  // let content;

  // if (isLoading) content = <p>Loading...</p>;

  // if (isError) {
  //   content = <p className="errmsg">{error?.data?.message}</p>;
  // }

  if (isSuccess) {
    const { ids, entities } = cars;

    let displayedIds = ids.length > 0 ? ids : ids;

    //

    return (
      <>
        <HomepageHeader />
        <Helmet title={"Strona główna"}>
          <section className="hero__section">
            <Slider {...sliderSettings}>
              <div className="hero__container">
                <div
                  className="hero__content custom-slide"
                  style={{
                    backgroundImage: `url(${heroImg1})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                  }}
                >
                  <p className="hero__subtitle">
                    Najpopularniejsze samochody w {year} roku!
                  </p>
                  <h2>BMW X5 M i X6 M.</h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.2 }}
                    className="slider__btn"
                  >
                    <Link to="/shop">Zobacz</Link>
                  </motion.button>
                </div>
              </div>

              <div className="hero__container">
                <div
                  className="hero__content"
                  style={{
                    backgroundImage: `url(${offer2})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                  }}
                >
                  <p className="hero__subtitle">
                    Najpopularniejsze samochody w {year} roku!
                  </p>
                  <h2>Coupé Klasy E.</h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.2 }}
                    className="slider__btn"
                  >
                    <Link to="/shop">Zobacz</Link>
                  </motion.button>
                </div>
              </div>

              <div className="hero__container">
                <div
                  className="hero__content"
                  style={{
                    backgroundImage: `url(${offer3})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                  }}
                >
                  <p className="hero__subtitle">
                    Najpopularniejsze samochody w {year} roku!
                  </p>
                  <h2>Mercedes-AMG GT Coupé.</h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.2 }}
                    className="slider__btn"
                  >
                    <Link to="/shop">Zobacz</Link>
                  </motion.button>
                </div>
              </div>

              <div className="hero__container">
                <div
                  className="hero__content"
                  style={{
                    backgroundImage: `url(${offer4})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                  }}
                >
                  <p className="hero__subtitle">
                    Najpopularniejsze samochody w {year} roku!
                  </p>
                  <h2>Mercedes-AMG SL Roadster.</h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.2 }}
                    className="slider__btn"
                  >
                    <Link to="/shop">Zobacz</Link>
                  </motion.button>
                </div>
              </div>

              <div className="hero__container">
                <div
                  className="hero__content"
                  style={{
                    backgroundImage: `url(${offer5})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                  }}
                >
                  <p className="hero__subtitle">
                    Najpopularniejsze samochody w {year} roku!
                  </p>
                  <h2>Audi S5 Coupé TDI</h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.2 }}
                    className="slider__btn"
                  >
                    <Link to="/shop">Zobacz</Link>
                  </motion.button>
                </div>
              </div>
            </Slider>
          </section>

          <Services />

          {/*///////////////////////////////////////////////////////////////////////////////////////////// */}

          <section className="trending__products">
            <h2 className="h2__services">Najpopularniejsze samochody</h2>
            <Container className="homepage-cars">
              <Row>
                {/* <Col lg="12" className="text-center mb-5">
        
      </Col> */}

                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {displayedIds.length > 0 ? (
                    displayedIds
                    .filter((carId) => {
                      const car = entities[carId];
                      return car && car.carCategory && car.carCategory.includes("mostPopularCars");
                    })
                      .map((carId) => (
                        <div key={carId} className="col mb-2">
                          <div className="car__item">
                            <Slider {...sliderSettings}>
                              {entities[carId].images.map((image, index) => (
                                <div key={index}>
                                  <img
                                    className="homepage-car-img"
                                    src={image}
                                    alt=""
                                  />
                                </div>
                              ))}
                            </Slider>

                            <div className="p-2 car__info">
                              <h3 className="car__name">
                                {entities[carId].brand}&nbsp;
                                {entities[carId].model}
                              </h3>
                              {/* <span>{entities[carId].model}</span> */}
                            </div>
                            <div className="car__card-bottom d-flex align-items-center justify-content-between p-2">
                              <span className="price">
                                {entities[carId].price} zł / dzień
                              </span>
                              <Link
                                to={`/shop/${carId}`}
                                className="btn btn-primary"
                              >
                                Zobacz
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))
                  ) : (
                    <p>Brak najpopularniejszych pojazdów.</p>
                  )}
                </div>
              </Row>
            </Container>
          </section>

          <section className="trending__products">
            <h2 className="h2__services">Nowe samochody w ofercie</h2>
            <Container className="homepage-cars">
              <Row>
                {/* <Col lg="12" className="text-center mb-5">
        <h2 className="section__title">Nowe samochody w ofercie</h2>
      </Col> */}

                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {displayedIds.length > 0 ? (
                    displayedIds
                      .filter((carId) => {
                        const car = entities[carId];
                        return car && car.carCategory && car.carCategory.includes("recentlyAddedCars");
                      })
                      .map((carId) => (
                        <div key={carId} className="col mb-2">
                          <div className="car__item">
                            <Slider {...sliderSettings}>
                              {entities[carId].images.map((image, index) => (
                                <div key={index}>
                                  <img
                                    className="homepage-car-img"
                                    src={image}
                                    alt=""
                                  />
                                </div>
                              ))}
                            </Slider>
                            <div className="p-2 car__info">
                              <h3 className="car__name">
                                {entities[carId].brand}&nbsp;
                                {entities[carId].model}
                              </h3>
                              {/* <span>{entities[carId].model}</span> */}
                            </div>
                            <div className="car__card-bottom d-flex align-items-center justify-content-between p-2">
                              <span className="price">
                                {entities[carId].price} zł / dzień
                              </span>
                              <Link to={`/shop/${carId}`} className="btn btn-primary">
                                Zobacz
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))
                  ) : (
                    <p>Brak pojazdów dla danej kategorii.</p>
                  )}
                </div>
              </Row>
            </Container>
          </section>

          {/* <section className="trending__products">
            <Container className="homepage-cars">
              <Row>
                <Col lg="12" className="text-center mb-5 ">
                  <h2 className="section__title ">
                    Najpopularniejsze samochody
                  </h2>
                </Col>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {displayedIds.length > 0 ? (
                    displayedIds.map((carId) => (
                      <div key={carId} className="col mb-2">
                        <div className="car__item">
                          <Slider {...sliderSettings}>
                            {entities[carId].images.map((image, index) => (
                              <div key={index}>
                                <img
                                  className="homepage-car-img"
                                  src={image}
                                  alt=""
                                />
                              </div>
                            ))}
                          </Slider>
                          <div className="p-2 car__info">
                            <h3 className="car__name">
                              <Link to={`/shop/${carId}`}>
                                {entities[carId].brand}
                              </Link>
                            </h3>
                            <span>{entities[carId].model}</span>
                          </div>
                          <div className="car__card-bottom d-flex align-items-center justify-content-between p-2">
                            <span className="price">
                              {entities[carId].price} zł / dzień
                            </span>
                            <Link to={`${carId}`} className="btn btn-primary">
                              Zobacz
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>Brak pojazdów dla danej kategorii.</p>
                  )}
                </div>
              </Row>
            </Container>
          </section> */}

          {/* <section className="best__sales">
            <Container>
              <Row>
                <Col lg="12" className="text-center mb-5">
                  <h2 className="section__title">Nowe pojazdy w ofercie</h2>
                </Col>
                <CarsList data={newCars} /> */}

          {/*Nadpisujemy styl aby uzyskać odpowiedni background (bootstrap) */}
          {/* <style>
                  {`
            .car__item{
              background: #fff;
            }
          `}
                </style>
              </Row>
            </Container>
          </section> */}

          <section className="timer__count">
            <Container>
              <Row className="special__offer">
                <Col lg="6" md="6">
                  <div className="clock__top-content">
                    <h4 className="text-white fs-6 mb-2">Oferta limitowana</h4>
                    <h3 className="text-white fs-5 mb-3">
                      Mercedes-AMG SL Roadster
                    </h3>
                  </div>
                  <Clock />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.2 }}
                    className="buy__btn store__btn"
                  >
                    <Link to="/shop">Zobacz</Link>
                  </motion.button>
                </Col>
                <Col lg="6" md="6" className="text-end">
                  <img src={specialOffer} alt="" />
                </Col>
              </Row>
            </Container>
          </section>

          {/* <section className="new__arrivals">
            <Container>
              <Row>
                <Col lg="12" className="text-center mb-5">
                  <h2 className="section__title">
                    {" "}
                    Najpopularniejsze samochody miejskie
                  </h2>
                </Col>
                <CarsList data={cityCars} />
              </Row>
            </Container>
          </section> */}

          <section className="trending__products">
            <h2 className="h2__services mt-5">
              Najpopularniejsze samochody miejskie
            </h2>
            <Container className="homepage-cars">
              <Row>
                {/* <Col lg="12" className="text-center mb-5">
        <h2 className="section__title">Najpopularniejsze samochody miejskie</h2>
      </Col> */}

                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {displayedIds.length > 0 ? (
                    displayedIds
                    .filter((carId) => {
                      const car = entities[carId];
                      return car && car.carCategory && car.carCategory.includes("cityCars");
                    })
                      .map((carId) => (
                        <div key={carId} className="col mb-2">
                          <div className="car__item">
                            <Slider {...sliderSettings}>
                              {entities[carId].images.map((image, index) => (
                                <div key={index}>
                                  <img
                                    className="homepage-car-img"
                                    src={image}
                                    alt=""
                                  />
                                </div>
                              ))}
                            </Slider>
                            <div className="p-2 car__info">
                              <h3 className="car__name">
                                {entities[carId].brand}&nbsp;
                                {entities[carId].model}
                              </h3>
                              {/* <span>{entities[carId].model}</span> */}
                            </div>
                            <div className="car__card-bottom d-flex align-items-center justify-content-between p-2">
                              <span className="price">
                                {entities[carId].price} zł / dzień
                              </span>
                              <Link to={`/shop/${carId}`} className="btn btn-primary">
                                Zobacz
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))
                  ) : (
                    <p>Brak pojazdów dla danej kategorii.</p>
                  )}
                </div>
              </Row>
            </Container>
          </section>

          <section className="trending__products">
            <h2 className="h2__services">
              Najpopularniejsze samochody rodzinne
            </h2>
            <Container className="homepage-cars">
              <Row>
                {/* <Col lg="12" className="text-center mb-5">
        <h2 className="section__title">Najpopularniejsze samochody rodzinne</h2>
      </Col> */}

                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {displayedIds.length > 0 ? (
                    displayedIds
                    .filter((carId) => {
                      const car = entities[carId];
                      return car && car.carCategory && car.carCategory.includes("familyCars");
                    })
                      .map((carId) => (
                        <div key={carId} className="col mb-2">
                          <div className="car__item">
                            <Slider
                              className="slider--homepage"
                              {...sliderSettings}
                            >
                              {entities[carId].images.map((image, index) => (
                                <div key={index}>
                                  <img
                                    className="homepage-car-img"
                                    src={image}
                                    alt=""
                                  />
                                </div>
                              ))}
                            </Slider>
                            <div className="p-2 car__info">
                              <h3 className="car__name">
                                {entities[carId].brand}&nbsp;
                                {entities[carId].model}
                              </h3>
                              {/* <span>{entities[carId].model}</span> */}
                            </div>
                            <div className="car__card-bottom d-flex align-items-center justify-content-between p-2">
                              <span className="price">
                                {entities[carId].price} zł / dzień
                              </span>
                              <Link to={`/shop/${carId}`} className="btn btn-primary">
                                Zobacz
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))
                  ) : (
                    <p>Brak pojazdów dla danej kategorii.</p>
                  )}
                </div>
              </Row>
            </Container>
          </section>

          {/* <section className="popular__category">
            <Container>
              <Row>
                <Col lg="12" className="text-center mb-5">
                  <h2 className="section__title">
                    {" "}
                    Najpopularniejsze samochody rodzinne
                  </h2>
                </Col>
                <CarsList data={familyCars} />
              </Row>
            </Container>
          </section> */}
        </Helmet>

        {/*Importuje Footer do strony głównej*/}
        <HomepageFooter />
      </>
    );
  }
};

export default Public;
