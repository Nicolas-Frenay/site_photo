import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import './styles/index.css';
import App from './components/App';
import NavBar from "./components/NavBar";
import FormPicture from "./components/formPicture";
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/upload',
        element: <FormPicture/>,
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <NavBar />
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
