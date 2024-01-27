import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, Link, RouterProvider} from 'react-router-dom'


const rout=createBrowserRouter([
    {
        path:"/",
        element: <App/>,
    },
    {
        path:"apropos",
        element:<Link to="/">Retour</Link>
               
    }
])
ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={rout}/>)
