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
        element:<>
        <h1>A propos</h1>
        <p>Voici un autre composant apropos</p>
        <Link to="/">Retour</Link>
        </>
               
    }
])
ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={rout}/>)
