import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from '../Root';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
import Services from '../Pages/Services';
import Login from '../Pages/Login';
import AuthLayout from '../../AuthLayout/AuthLayout';
import Register from '../Pages/Register';
import PrivateRoute from './PrivateRoute';
import Therapy from '../Pages/Therapy';
import CareerCounseling from '../Pages/CareerCounseling';
import StressManagement from './../Pages/StressManagement';
import FinancialPlanning from './../Pages/FinancialPlanning';
import SkillCounseling from './../Pages/SkillCounseling';
import ResumeReview from '../Pages/ResumeReview';
import About from '../Pages/About';
import Profile from '../Pages/Profile';
import Appointment from './../Pages/Appointment';
import ForgotPassword from '../Pages/ForgotPassword';



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/services",
            element: <Services></Services>,
            // children:[
            //   {
            //     path: "/services/fitness-coaching",
            //     element:<h2>fitness</h2>,
            //   }
           

            // ]
        },
        {
          path: "/about",
            element: <About></About>,
        },
        {
            path: "/login",
            element: <Login></Login>,
           
              
               
              
            
        },
        {
          path: "/services/fitness-coaching",
          element:(
          <PrivateRoute><ResumeReview></ResumeReview></PrivateRoute>
          
          )
          
          ,
        },
        {
          path: "/services/stress-management",
          element:
          <PrivateRoute><StressManagement></StressManagement></PrivateRoute>
          ,
        },
        {
          path: "/services/diet-counseling",
          element:
          <PrivateRoute><SkillCounseling></SkillCounseling></PrivateRoute>
          ,
        },
        {
          path: "/services/financial-planning",
          element:
          <PrivateRoute><FinancialPlanning></FinancialPlanning></PrivateRoute>
          ,
        },
        {
          path: "/services/career-counseling",
          element:
          <PrivateRoute><CareerCounseling></CareerCounseling></PrivateRoute>
          ,
        },
        {
          path: "/services/personal-therapy",
          element:
          <PrivateRoute><Therapy></Therapy></PrivateRoute>
          ,
        },
        {
          path:"/profile",
          element:<PrivateRoute> <Profile></Profile></PrivateRoute>
           
        },
        {
          path:"/appointment",
          element:<PrivateRoute> <Appointment></Appointment> </PrivateRoute>
           
        },


      ]
    },
    {
        path: "*",
      element: <NotFound></NotFound>,
    },
    {
        path: "/auth",
      element: <AuthLayout></AuthLayout>,
      children:[
        {
              path:"/auth/login",
              element: <Login></Login>,
        },
        {
            path:"/auth/register",
            element: <Register></Register>
      },
      
      ]
    },
    {
      path:"/forgot-password",
      element:<ForgotPassword></ForgotPassword>
    }
  
   
 

  ]);

export default router;