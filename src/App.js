import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './components/Layout/Layout';
import Contact from './components/Contact';
import Home from './components/Home/index'
import Skills from './components/Skills/index'
import Experience from './components/Experience/index'
import Portfolio from './components/Portfolio/index'
import './styles/App.scss';

function App() {
  const [locale, setLocale] = useState('en');

  return (
    <>
      <Routes>
        <Route path="/" element={<IntlProvider locale={locale}><Layout setLocale={setLocale} /></IntlProvider>}>
          <Route index element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
