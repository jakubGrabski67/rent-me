import React, { useState } from 'react';
import {
  Container,
  Button,
  
} from 'react-bootstrap';
import DashboardNavbarLeft from '../DashboardNavbarLeft/DashboardNavbarLeft';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import Formularz1 from './Forms/Formularz1';
import Formularz2 from './Forms/Formularz2';
import Formularz3 from './Forms/Formularz3';
import "../DashboardStyles/DashboardDocumentation.css";

const DashboardDocumentation = () => {
  const goBack = () => {
    setSelectedForm(null);
  };
  
  
  const [formData, setFormData] = useState({
    rentingParty: '',
    customerName: '',
    vehicleMakeAndModel: '',
    vehicleRegistrationNumber: '',
    vehicleYearOfProduction: '',
    rentalStartDate: '',
    rentalEndDate: '',
    basicFee: '',
    additionalFees: '',
    insuranceCosts: '',
    fuelLevel: '',
    returnLocation: '',
    returnDate: '',
    insuranceDetails: '',
    customerLiability: '',
    cancellationConditions: '',
    penaltyForBreach: '',
    jurisdictionClauses: '',
  });

  const [selectedForm, setSelectedForm] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePrint = (title, content) => {
    const printWindow = window.open('', '', 'width=900,height=900');
    printWindow.document.open();
    printWindow.document.write(`<html><head><title>${title}</title></head><body>`);
    printWindow.document.write(`<h1>${title}</h1>`);
    printWindow.document.write(content); // Przekazywanie treści do wydruku
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };
  

  const handleFormSelect = (formId) => {
    setSelectedForm(formId);
  };

  return (
    <>
      <DashboardNavbar />
      <DashboardNavbarLeft />
      <Container className="rental-agreement-form">

        {selectedForm !== null ? (
          // Jeśli wybrano Formularz 1, wyświetlamy Formularz 1
          selectedForm === 1 ? (
            <Formularz1
              formData={formData}
              handleChange={handleChange}
              handlePrint={() => handlePrint('Treść Formularza 1')}
              goBack={goBack} // Przekazujemy funkcję goBack do Formularz2
            />
          ) : (
            // Jeśli wybrano Formularz 2, wyświetlamy Formularz 2
            selectedForm === 2 ? (
              <Formularz2
                formData={formData}
                handleChange={handleChange}
                handlePrint={() => handlePrint('Treść Formularza 2')}
                goBack={goBack} // Przekazujemy funkcję goBack do Formularz2
              />
            ) : (
              // Jeśli wybrano Formularz 3, wyświetlamy Formularz 3
              selectedForm === 3 ? (
                <Formularz3
                  formData={formData}
                  handleChange={handleChange}
                  handlePrint={() => handlePrint('Treść Formularza 3')}
                  goBack={goBack} // Przekazujemy funkcję goBack do Formularz2
                />
              ) : null
            )
          )
        ) : (
          <div className='forms'>
            <h2 className='mb-5 h2-documentation'>Wybierz formularz, który chcesz wypełnić lub wydrukować:</h2>
          
              <Button variant="primary" onClick={() => handleFormSelect(1)}>
                Umowa najmu pojazdu
              </Button>
              <Button variant="primary" onClick={() => handleFormSelect(2)}>
                Raport o stanie pojazdu
              </Button>
              <Button variant="primary" onClick={() => handleFormSelect(3)}>
                Potwierdzenie ubezpieczenia
              </Button>
            
          </div>
        )}
      </Container>
    </>
  );
};

export default DashboardDocumentation;
