import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import ListTripPage from "./pages/ListTripsPage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import AdminHomePage from "./pages/AdminHomePage";
import CreateTripPage from "./pages/CreateTripPage";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    
    <div>
<HomePage/>
<ListTripPage/>
<ApplicationFormPage/>
<AdminHomePage/>
<CreateTripPage/>
<LoginPage/>

    </div>
      
  );
}

export default App;
