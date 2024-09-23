// import './App.css'
import React, { useState } from 'react';
import { IconButton } from './components/molecules/IconButton';
import { Form } from './components/organisms/Form';
import { Button } from './components/atoms/Button';
import { Navbar } from './components/organisms/Navbar';
import Accordion from './components/organisms/Accordion';
import { Alert } from './components/atoms/Alert';
import { BasicCard, CustomImageCard, CustomProfileCard } from './components/organisms/Card';

function App() {
  // State untuk menentukan apakah alert ditampilkan dan jenis alert
  const [alertType, setAlertType] = useState(null);

  // Fungsi untuk menutup alert
  const closeAlert = () => {
    setAlertType(null);
  };

  // Fungsi untuk membuka alert berdasarkan jenis
  const openAlert = (type) => {
    setAlertType(type);
  };

  return (
    <>
      <Navbar>
        <a href="/" className="navbar__logo">
          MyApp
        </a>
        <div className="navbar__menu">
          <a href="/" className="navbar__item">
            Home
          </a>
          <a href="/about" className="navbar__item">
            About
          </a>
          <a href="/contact" className="navbar__item">
            Contact
          </a>
        </div>
        <div className="navbar__actions">
          <Button variant="outline" className="navbar__button">
            Login
          </Button>
          <Button variant="primary" className="navbar__button">
            Sign Up
          </Button>
        </div>
      </Navbar>

      <div style={{ padding: '25px' }}>
        {alertType && (
          <Alert variant={alertType}>
            <span className="alert__icon">
              {alertType === 'success' && '✔️'}
              {alertType === 'danger' && '❌'}
              {alertType === 'warning' && '⚠️'}
              {alertType === 'info' && 'ℹ️'}
            </span>
            <span className="alert__message">
              {`This is a ${alertType} alert message!`}
            </span>
            <button className="alert__close-button" onClick={closeAlert}>
              &times;
            </button>
          </Alert>
        )}

        <Button variant="primary" onClick={() => openAlert('success')}>
          Show Success Alert
        </Button>
        <Button variant="secondary" className="button--large">
          Large Secondary
        </Button>
        <Button variant="success" className="button--small" onClick={() => openAlert('success')}>
          Show Small Success
        </Button>
        <Button variant="danger" onClick={() => openAlert('danger')}>
          Show Danger Alert
        </Button>
        <Button variant="warning" onClick={() => openAlert('warning')}>
          Show Warning Alert
        </Button>
        <Button variant="info" onClick={() => openAlert('info')}>
          Show Info Alert
        </Button>
      </div>

      <Form>
        <input type="text" className="form__input" placeholder="Enter text" />
        <IconButton className="button--primary">
          <span className="icon-button__icon">🔍</span> Search
        </IconButton>
      </Form>

      <BasicCard title="Basic Card" body="This is a basic card body." footer="Footer Content" />

      <CustomImageCard
        image="/public/lettuce.jpg"
        title="Image Card"
        body="This is an image card with some description."
      />

      <CustomProfileCard
        avatar="/public/profile.jpg"
        name="Anna Hamilton"
        description="Software Engineer at Company"
      />

      <Accordion title="Accordion 1">
        <p>
          This is the content of Accordion 1. You can place any content here, including text, images, or other components.
        </p>
      </Accordion>
      <Accordion title="Accordion 2">
        <p>This is the content of Accordion 2. Add more details or nested components as needed.</p>
      </Accordion>
    </>
  );
}

export default App;
