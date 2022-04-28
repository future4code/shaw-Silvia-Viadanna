import React from "react";
import {HomePage} from "../pages/HomePage";
import {ListTripsPage} from "../pages/ListTripsPage";
import {ApplicationFormPage} from "../pages/ApplicationFormPage";
import {AdminHomePage} from "../pages/AdminHomePage";
import {CreateTripPage} from "../pages/CreateTripPage";
import {LoginPage} from "../pages/LoginPage";
import { TripDetailsPage} from "../pages/TripDetailsPage";
import {BrowserRouter, Routes,Route} from "react-router-dom";

export const Router=()=>{



    return(
          
<BrowserRouter>
      <Routes>
       <Route index element ={<HomePage/>} />
      <Route path="listaViagens" element= {<ListTripsPage/>} />
      <Route path="incricaoViagem" element={<ApplicationFormPage/>}/>
      <Route path="paginaAdmin" element={<AdminHomePage/>}/>
      <Route path="criarViagem" element={<CreateTripPage/>}/>
      <Route path="detalheViagem" element={<TripDetailsPage/>}/>
      <Route path="login" element={<LoginPage/>}/>
     </Routes>
     </BrowserRouter>

    )

}