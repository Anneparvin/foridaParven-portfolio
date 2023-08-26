import { createBrowserRouter } from "react-router-dom";
import Main from "../../Components/Layout/Main";
import Home from "../Home/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>   
        }
      ]
    },
    {
        path: "/*",
        element: <div><img className="w-full max-h-fit" src='https://i.ibb.co/0fGkntw/images.jpg' alt=""/></div>,  
    }
  ]);