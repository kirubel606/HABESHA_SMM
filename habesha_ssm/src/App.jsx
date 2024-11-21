import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Deposit from './pages/Deposit';
import Orders from './pages/Orders';
import Header from './pages/Header';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="buy" element={<Buy />} />
      <Route path="deposit" element={<Deposit />} />
      <Route path="orders" element={<Orders />} />
    </Route>
  )
)

function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;