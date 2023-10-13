import React from "react";
import "../DashboardStyles/DashboardHomepage.css";

import SingleCard from "../reuseable/SingleCard";

import MileChart from "../../../assets/charts/MileChart";
import CarStatsChart from "../../../assets/charts/CarStatsChart";

import RecommendCarCard from "../DashboardUI/RecommendCarCard";

import recommendCarsData from "../../../assets/dummy-data/recommendCars";

import DashboardNavbarLeft from "../DashboardNavbarLeft/DashboardNavbarLeft";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";

import Helmet from '../../Helmet/Helmet'



const carObj = {
  title: "Posiadane pojazdy",
  totalNumber: 750,
  icon: "ri-police-car-line",
};

const tripObj = {
  title: "Dzienne trasy",
  totalNumber: 1697,
  icon: "ri-steering-2-line",
};

const clientObj = {
  title: "Klienci rocznie",
  totalNumber: "85k",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Dzienne kilometry",
  totalNumber: 2167,
  icon: "ri-timer-flash-line",
};

const DashboardHomepage = () => {
  return (
    <Helmet title ={'Dashboard - Panel'}>
    <>
    {/*Importuje NavbarLeft  do dashboardu*/}
    <DashboardNavbar/>
    <DashboardNavbarLeft/>

    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Statystyki pokonanych kilometrów</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Statystyki wypożyczonych pojazdów</h3>
            <CarStatsChart />
          </div>
        </div>

        <div className="recommend__cars-wrapper">
          {recommendCarsData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
    </>
    </Helmet>
  );
};

export default DashboardHomepage;
