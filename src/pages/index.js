import React from 'react';
import { Dashboard } from '../app/dashboard/route';
import '../styles/styling.css';

const App = () => {
    return (
        <div>
            <Dashboard href="/dashboard" />
        </div>
    );
};

export default App;
