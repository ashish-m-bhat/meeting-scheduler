import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import MeetingsArrayContextProvider from './Context/MeetingsArrayContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <MeetingsArrayContextProvider>
            <App />
        </MeetingsArrayContextProvider>
    </BrowserRouter>
);