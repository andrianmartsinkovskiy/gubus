import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom";
import {APP_ROUTES} from "./const/app-routes";


const useRoutes = () => {


  return (
    <Routes>
      <Route exact path={APP_ROUTES.home} element={<LoginPage/>} />
      <Route
        path="*"
        element={<Navigate to={APP_ROUTES.home} />}
      />
    </Routes>
  )
}

export {useRoutes}
