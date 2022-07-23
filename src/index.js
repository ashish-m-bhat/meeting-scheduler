import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MeetingsArrayContextProvider from './Context/MeetingsArrayContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MeetingsArrayContextProvider>
        <App />
    </MeetingsArrayContextProvider>
);