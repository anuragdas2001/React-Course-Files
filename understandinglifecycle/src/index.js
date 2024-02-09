import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ErrorBoundary from './ErrorBoundary';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
     {/* <App /> */}
    <ErrorBoundary>
        <ComponentA/>
    </ErrorBoundary>

    <ErrorBoundary>
        <ComponentB/>
    </ErrorBoundary>
    </>
    

);


