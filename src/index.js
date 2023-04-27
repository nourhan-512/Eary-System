import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import{route}from"./Routes.js";

export const url='http://localhost:1000';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={route}/>);
