//inclede pages that will be used
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Signup from './pages/sign up/sign up.js';
import Login from "./pages/login/login.js";
import App from "./App.js";
import Notfound from './share/Notfound.js';
import Quiz from './pages/user-operations/Quiz.js';
import Admin from './pages/admin_pages/admin.js';
import Users from './pages/admin_pages/users.js';
import Posts from './pages/admin_pages/exams.js';


export const route = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
           
                    {
                        path: "/sign up",
                        element: <Signup />
                    },
                    {
                        path: "/login",
                        element: <Login />
                    },
                ]
           
    },

    {
        path: '*',
        element: <Notfound />
    },
  
     
            {
                path: "/admin",
                element: <Admin />
            },
            {
                path: "/admin/users.js",
                element: <Users />
            },
            {
                path: "/admin/post.js",
                element: <Posts />
            },
       
  
    {
        
            path: "/quiz",
            element: <Quiz />
        
    },


]);


