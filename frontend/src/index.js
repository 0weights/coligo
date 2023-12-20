import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/bootstrap.custom.css';
import "./assets/index.css";
import  HomeScreen from './screens/HomePage.jsx';
import  RequireAuth from './screens/RequireAuth.jsx';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from  'react-router-dom';
import Cookies from 'js-cookie';

const isValidCookie = () => {
  const myCookie = Cookies.get('myCookie');
  return myCookie !== undefined && myCookie !== null && myCookie.trim() !== '';
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<RequireAuth />}/>
      <Route index path="/home" element={<HomeScreen />}/>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>
);


