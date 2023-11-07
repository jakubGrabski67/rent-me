import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import jsPDF from 'jspdf'; // Importuje jsPDF
import "../../DashboardStyles/DashboardDocumentation.css";

const Formularz3 = ({ formData, handleChange, handlePrint, goBack }) => {
    const handleSaveAsPDF = () => {
        const pdf = new jsPDF();
        pdf.text('Treść Formularza 1', 10, 10); // Dodaj treść formularza do pliku PDF
        pdf.save('Potwierdzenie_ubezpieczenia.pdf'); // Zapisz jako plik PDF o nazwie 'Formularz1.pdf'
      };
  return (
    <Container className="rental-agreement-form">
      <h1 className="mt-5 h2-documentation">POTWIERDZENIE UBEZPIECZENIA</h1>

      <h2 className='h2-documentation pt-3'>Potwierdzamy, że pojazd o następujących danych:</h2>
      <Form.Group as={Row} className="mb-3 pt-3">
        <Form.Label column sm="4">
          Marka i model:
        </Form.Label>
        <Col sm="8">
          <Form.Control
            type="text"
            name="vehicleMakeAndModel"
            value={formData.vehicleMakeAndModel}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="4">
          Numer rejestracyjny:
        </Form.Label>
        <Col sm="8">
          <Form.Control
            type="text"
            name="vehicleRegistrationNumber"
            value={formData.vehicleRegistrationNumber}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="4">
          Data rozpoczęcia ochrony:
        </Form.Label>
        <Col sm="8">
          <Form.Control
            type="text"
            name="insuranceStartDate"
            value={formData.insuranceStartDate}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="4">
          Data zakończenia ochrony:
        </Form.Label>
        <Col sm="8">
          <Form.Control
            type="text"
            name="insuranceEndDate"
            value={formData.insuranceEndDate}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <h2 className='h2-documentation pt-3'>Jest objęty polisą ubezpieczeniową zawartą z firmą PZU.</h2>

      <Form.Group as={Row} className="mb-3 pt-3">
        <Form.Label column sm="4">
          Numer polisy:
        </Form.Label>
        <Col sm="8">
          <Form.Control
            type="text"
            name="policyNumber"
            value={formData.policyNumber}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="4">
          Zakres ochrony:
        </Form.Label>
        <Col sm="8">
          <Form.Control
            type="text"
            name="coverageScope"
            value={formData.coverageScope}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <h2 className='h2-documentation pt-3'>W razie potrzeby zgłoszenia szkody, prosimy o kontakt pod numerem:</h2>

      <Form.Group as={Row} className="mb-3 pt-3">
        <Form.Label column sm="4">
          Numer kontaktowy:
        </Form.Label>
        <Col sm="8">
          <Form.Control
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

<div className='pt-3'>
      <Button variant="primary" onClick={() => handlePrint('Treść Formularza 3')}>
        Drukuj
      </Button>
      <Button variant="primary" onClick={handleSaveAsPDF}>
        Zapisz plik jako PDF
      </Button>
      <Button variant="secondary" onClick={goBack}>
        Wróć
      </Button>
      </div>
    </Container>
  );
};

export default Formularz3;
