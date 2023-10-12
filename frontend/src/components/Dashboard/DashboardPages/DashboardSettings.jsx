import React from "react";
import "../DashboardStyles/DashboardSettings.css";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import DashboardNavbarLeft from "../DashboardNavbarLeft/DashboardNavbarLeft";

const DashboardSettings = () => {
  return (
    <>
    {/*Importuje DashboarNavbar i NavbarLeft do Dashboard/Renting*/}
    <DashboardNavbar/>
    <DashboardNavbarLeft/>

    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Ustawienia</h2>

        <div className="settings__top">
          <button className="setting__btn">Twoje dane</button>
          <button className="setting__btn active__btn">Profil</button>
          <button className="setting__btn">Hasło</button>
          <button className="setting__btn">E-mail</button>
          <button className="setting__btn">Powiadomienia</button>
        </div>

        <div className="details__form">
          <h2 className="profile__title">Profil</h2>
          <p className="profile__desc">
            Tutaj możesz zaktualizować swoje dane
          </p>
          <form>
            <div className="form__group">
              <div>
                <label>Zamieszkały w:</label>
                <input type="text" placeholder="Opole, Polska" />
              </div>

              <div>
                <label>Ulica:</label>
                <input type="text" placeholder="Jasna 60" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>E-mail:</label>
                <input type="email" placeholder="nowakAdam55@gmail.com" />
              </div>

              <div>
                <label>Numer telefonu:</label>
                <input type="number" placeholder="+48 123 123 123" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Data urodzenia:</label>
                <input type="date" placeholder="dd/mm/yyyy" />
              </div>

              <div>
                <label>Płeć:</label>
                <input type="text" placeholder="Mężczyzna" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Twoje zdjęcie profilowe:</label>
                <p className="profile-img__desc">
                  To zdjęcie będzie wyświetlone w Twoim profilu.
                </p>
                <input type="file" placeholder="Wybierz plik..." />
              </div>

              <div className="profile__img-btns">
                <button className="dlt__btn">Usuń</button>
                <button className="update__btn">Zapisz</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default DashboardSettings;
