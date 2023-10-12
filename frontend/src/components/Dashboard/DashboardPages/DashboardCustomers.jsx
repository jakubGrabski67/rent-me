import React from "react";
import "../DashboardStyles/DashboardCustomers.css";

import carData from "../../../assets/dummy-data/booking-cars";
import CarItem from "../DashboardUI/CarItem";

import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import DashboardNavbarLeft from "../DashboardNavbarLeft/DashboardNavbarLeft";
import Helmet from "../../Helmet/Helmet";

const DashboardCustomers = () => {
  return (
    <Helmet title ={'Dashboard - Klienci'}>
    <>
    {/*Importuje DashboarNavbar i NavbarLeft do Dashboard/Customers*/}
    <DashboardNavbar/>
    <DashboardNavbarLeft/>
    

    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">Wybierz klienta do podglądu lub edycji.</h2>

        <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select>
              <option value="Sedan">Detalista</option>
              <option value="Coupe">Firmowy</option>
            </select>
          </div>
        </div>

        {/*<div className="booking__car-list">
          {carData?.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </div>*/}
      </div>
    </div>
    </>
    </Helmet>
  );
  
};

export default DashboardCustomers;
