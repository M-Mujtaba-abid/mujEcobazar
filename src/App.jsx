import React from 'react';
import Layout from './routung/layout';
import { Route, Routes } from 'react-router-dom';
import ProectingRouting from './auth/ProectingRouting'; // Make sure file and export are correct
import Login from './auth/Login';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route element={<ProectingRouting />}>
          <Route path="/*" element={<Layout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
