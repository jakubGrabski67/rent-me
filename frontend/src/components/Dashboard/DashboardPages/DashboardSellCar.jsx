import React from "react";
import sellCar from "../../../assets/images/sell-car.png";
import "../DashboardStyles/DashboardSellCar.css";
import TrackingChart from "../../../assets/charts/TrackingChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import DashboardNavbarLeft from "../DashboardNavbarLeft/DashboardNavbarLeft";

const DashboardSellCar = () => {
  const percentage = 55;
  const percentage02 = 45;
  return (
    <>
    {/*Importuje DashboarNavbar i NavbarLeft do Dashboard/Renting*/}
    <DashboardNavbar/>
    <DashboardNavbarLeft/>

    <div className="sell__car">
      <div className="sell__car-wrapper">
        <h2 className="sell__car-title">Historia pojazdów</h2>
        <div className="sell__car-top">
          <div className="sell__car-img">
            <h2>2022 AUDI</h2>
            <img src={sellCar} alt="" />
          </div>

          <div className="tracking__history">
            <h3>Historia pokonanych kilometrów przez pojazd</h3>
            <TrackingChart />
          </div>
        </div>

        <div className="offer__wrapper">
          <div className="offer__top">
            <h2 className="sell__car-title">Wybierz pojazd</h2>

            <div className="filter__widget-01">
              <select>
                <option value="toyota">Toyota</option>
                <option value="bmw">BMW</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>

          {/* <div className="offer__list">
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Adam Nowak</h3>
                <h6 className="avg__price">
                  $16,605 <span>średnia cena</span>
                </h6>

                <h6 className="market__price">Cena rynkowa wynosi: $16,244</h6>
                <span className="arrow__key">
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  />
                </div>
                <h4>Impression Share</h4>
              </div>

              <div className="box__03">
                <span className="model__spend-icon">
                  <i className="ri-car-line"></i>
                </span>
                <h6 className="spend__amount">$1174</h6>
                <p className="spend__title">Model Spend</p>
              </div>

              <div className="box__04">
                <span className="model__spend-icon">
                  <i className="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">$1174</h6>
                <p className="spend__title">Model Spend</p>
              </div>

              <div className="box__05">
                <span className="model__spend-icon">
                  <i className="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">$811</h6>
                <p className="spend__title">Spend Per Unit Turned</p>
              </div>
            </div>
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Bereszyński Bartosz</h3>
                <h6 className="avg__price">
                  $11,605 <span>średnia cena</span>
                </h6>

                <h6 className="market__price">Cena rynkowa wynosi: $11,244</h6>
                <span className="arrow__key">
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage02}
                    text={`${percentage02}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  />
                </div>
                <h4>Impression Share</h4>
              </div>

              <div className="box__03">
                <span className="model__spend-icon">
                  <i className="ri-car-line"></i>
                </span>
                <h6 className="spend__amount">$1174</h6>
                <p className="spend__title">Model Spend</p>
              </div>

              <div className="box__04">
                <span className="model__spend-icon">
                  <i className="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">$1174</h6>
                <p className="spend__title">Model Spend</p>
              </div>

              <div className="box__05">
                <span className="model__spend-icon">
                  <i className="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">$811</h6>
                <p className="spend__title">Spend Per Unit Turned</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default DashboardSellCar;
